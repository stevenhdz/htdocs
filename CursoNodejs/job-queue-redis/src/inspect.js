// src/inspect.js
// Script para inspeccionar los jobs almacenados en Redis.
// Muestra todos los jobs de la cola "emails" con su estado actual.

const redis = require('./redis');

const QUEUE_NAME = 'emails';
const ID_KEY = `jobs:${QUEUE_NAME}:id`;
const JOB_KEY_PREFIX = `job:${QUEUE_NAME}:`;

function jobKey(id) {
  return `${JOB_KEY_PREFIX}${id}`;
}

async function main() {
  console.log(`🔎 Inspeccionando jobs de la cola "${QUEUE_NAME}"...\n`);

  // 1. Leer el contador de IDs para saber hasta dónde iterar
  const lastIdStr = await redis.get(ID_KEY);
  const lastId = Number(lastIdStr || 0);

  if (!lastId) {
    console.log('⚠️ No se encontraron jobs (contador vacío).');
    process.exit(0);
  }

  const jobs = [];

  // 2. Recorrer todos los IDs desde 1 hasta lastId
  for (let id = 1; id <= lastId; id++) {
    const raw = await redis.get(jobKey(id));
    if (!raw) {
      // Puede pasar si eliminaste jobs, o si algo se limpió
      continue;
    }

    try {
      const job = JSON.parse(raw);

      jobs.push({
        id: job.id,
        type: job.type,
        to: job.payload?.to ?? null,
        status: job.status,
        attempts: job.attempts,
        maxAttempts: job.maxAttempts,
        lastError: job.lastError,
      });
    } catch (e) {
      console.error(`💥 Error parseando job #${id}:`, e.message);
    }
  }

  if (jobs.length === 0) {
    console.log('⚠️ No hay jobs registrados en Redis.');
    process.exit(0);
  }

  // 3. Ordenar por id asc
  jobs.sort((a, b) => a.id - b.id);

  // 4. Mostrar tabla general
  console.log('📋 Jobs encontrados:\n');
  console.table(jobs);

  // 5. Opcional: agrupar por status (para ver rápido pendientes / failed)
  const byStatus = jobs.reduce((acc, job) => {
    acc[job.status] = acc[job.status] || 0;
    acc[job.status] += 1;
    return acc;
  }, {});

  console.log('\n📊 Resumen por estado:');
  console.table(
    Object.entries(byStatus).map(([status, count]) => ({ status, count }))
  );

  process.exit(0);
}

main().catch((err) => {
  console.error('💥 Error en inspect.js:', err.message);
  process.exit(1);
});
