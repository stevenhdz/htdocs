// src/jobQueue.js
// Esta clase maneja TODO:
// - crear jobs
// - guardarlos en Redis
// - sacarlos de la cola
// - marcar completados / fallidos
// - reintentar hasta maxAttempts

const redis = require('./redis');

class JobQueue {
  constructor(queueName = 'default') {
    this.queue = queueName;
    this.queueKey = `queue:${this.queue}`;       // LIST con IDs de jobs pendientes
    this.jobKeyPrefix = `job:${this.queue}:`;    // job:emails:1, job:emails:2, ...
    this.idKey = `jobs:${this.queue}:id`;        // contador de IDs
  }

  // Construye la key de un job específico
  _jobKey(id) {
    return `${this.jobKeyPrefix}${id}`;
  }

  /**
   * Crea un nuevo job y lo mete a la cola.
   * @param {string} type - tipo de job (ej: "send_email")
   * @param {object} payload - datos necesarios para ejecutar el job
   * @param {object} options - { maxAttempts?: number }
   */
  async addJob(type, payload = {}, options = {}) {
    const now = new Date().toISOString();

    // Si no mandas maxAttempts, por defecto 3
    const maxAttempts = typeof options.maxAttempts === 'number'
      ? options.maxAttempts
      : 3;

    // 1) Generar un nuevo ID autoincremental en Redis
    const id = await redis.incr(this.idKey);

    // 2) Armar el objeto job
    const job = {
      id,
      queue: this.queue,
      type,
      payload,
      status: 'pending',   // pending | processing | completed | failed
      attempts: 0,
      maxAttempts,
      createdAt: now,
      updatedAt: now,
      lastError: null,
    };

    // 3) Guardar job en Redis
    await redis.set(this._jobKey(id), JSON.stringify(job));

    // 4) Enviar ID a la cola (LIST) en Redis
    await redis.rpush(this.queueKey, String(id));

    console.log(`📥 [Queue:${this.queue}] Job encolado #${id} (${type})`);

    return job;
  }

  /**
   * Obtiene un job por ID desde Redis.
   */
  async getJob(id) {
    const raw = await redis.get(this._jobKey(id));
    if (!raw) return null;
    return JSON.parse(raw);
  }

  /**
   * Toma el siguiente job de la cola (bloqueante).
   * Usa BLPOP para esperar hasta que haya trabajo o se cumpla el timeout.
   * @param {number} timeoutSeconds - segundos a esperar si no hay ítems en la cola
   */
  async fetchNextJob(timeoutSeconds = 1) {
    // BLPOP devuelve: [ "queue:emails", "1" ] o null si se acaba el timeout
    const res = await redis.blpop(this.queueKey, timeoutSeconds);

    if (!res) {
      // No había trabajo en la cola
      return null;
    }

    const [, idStr] = res;
    const id = Number(idStr);

    // Cargar el job real
    const job = await this.getJob(id);
    if (!job) {
      console.warn(`⚠️ [Queue:${this.queue}] Job #${id} no existe en Redis`);
      return null;
    }

    // Marcar como "processing"
    job.status = 'processing';
    job.updatedAt = new Date().toISOString();
    await redis.set(this._jobKey(job.id), JSON.stringify(job));

    console.log(`▶️ [Queue:${this.queue}] Tomando job #${job.id} (${job.type}) para procesar`);

    return job;
  }

  /**
   * Marca un job como completado.
   */
  async markCompleted(jobId) {
    const job = await this.getJob(jobId);
    if (!job) {
      console.warn(`⚠️ [Queue:${this.queue}] markCompleted: job #${jobId} no existe`);
      return;
    }

    job.status = 'completed';
    job.updatedAt = new Date().toISOString();
    job.lastError = null;

    await redis.set(this._jobKey(job.id), JSON.stringify(job));

    console.log(`✅ [Queue:${this.queue}] Job #${job.id} COMPLETADO`);
  }

  /**
   * Marca un job como fallido.
   * Si aún le quedan intentos, lo vuelve a encolar.
   */
  async markFailed(job, errorMessage) {
    const now = new Date().toISOString();

    job.attempts += 1;
    job.updatedAt = now;
    job.lastError = String(errorMessage || '').slice(0, 1000);

    console.log(
      `🔁 [Queue:${this.queue}] Job #${job.id} fallo: "${job.lastError}". ` +
      `Intento ${job.attempts}/${job.maxAttempts}`
    );

    // Si ya alcanzó el número máximo de intentos → FAILED definitivo
    if (job.attempts >= job.maxAttempts) {
      job.status = 'failed';

      await redis.set(this._jobKey(job.id), JSON.stringify(job));

      console.log(
        `❌ [Queue:${this.queue}] Job #${job.id} marcado como FAILED definitivamente ` +
        `(se alcanzó maxAttempts)`
      );
      return;
    }

    // Todavía le quedan intentos, se reencola
    job.status = 'pending';

    await redis.set(this._jobKey(job.id), JSON.stringify(job));
    await redis.rpush(this.queueKey, String(job.id));

    console.log(
      `📥 [Queue:${this.queue}] Job #${job.id} reencolado para reintento posterior`
    );
  }

  /**
   * Loop principal del worker.
   * - Saca jobs de la cola
   * - Busca el handler adecuado
   * - Ejecuta el handler
   * - Marca completado o fallido (con reintentos)
   */
  async startWorker({ handlers, pollIntervalMs = 1000 } = {}) {
    console.log(`👷 [Worker] Iniciando worker para cola "${this.queue}"...`);

    while (true) {
      // 1. Intentar obtener un job
      const job = await this.fetchNextJob(1); // espera 1 seg si no hay jobs

      if (!job) {
        // No hay trabajo → espera un poco y vuelve a intentar
        await this._sleep(pollIntervalMs);
        continue;
      }

      // 2. Buscar el handler según el tipo de job
      const handler = handlers[job.type];

      if (!handler) {
        console.error(
          `❌ [Worker] No existe handler para job.type="${job.type}". ` +
          `Marcando job #${job.id} como failed.`
        );
        await this.markFailed(job, `Handler no definido para tipo "${job.type}"`);
        continue;
      }

      // 3. Ejecutar el handler
      try {
        await handler(job); // si falla lanza excepción
        await this.markCompleted(job.id);
      } catch (err) {
        console.error(
          `💥 [Worker] Error ejecutando job #${job.id}:`,
          err.message
        );
        await this.markFailed(job, err.message);
      }
    }
  }

  _sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

module.exports = JobQueue;
