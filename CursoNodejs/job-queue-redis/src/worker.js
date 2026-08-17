// src/worker.js
// Este archivo es el WORKER: saca jobs de Redis y los ejecuta.

const JobQueue = require('./jobQueue');

async function main() {
  const queue = new JobQueue('emails');

  // Handlers para los distintos tipos de jobs
  const handlers = {
    /**
     * Handler para jobs de tipo "send_email".
     * Simula envío de correo.
     */
    send_email: async (job) => {
      const { to, subject, body } = job.payload;

      console.log('\n📧 [Handler] Enviando correo simulado:');
      console.log(`   - To     : ${to}`);
      console.log(`   - Subject: ${subject}`);
      console.log(`   - Body   : ${body}`);
      console.log(`   - Attempt: ${job.attempts + 1}/${job.maxAttempts}`);

      // Simulamos un fallo SOLO para user3 mientras intentos < 4
      // (para demostrar reintentos)
      if (to.includes('user3@example.com') && job.attempts < 4) {
        throw new Error('Fallo simulado al enviar a user3');
      }

      // Simulamos un pequeño tiempo de trabajo
      await new Promise((r) => setTimeout(r, 500));
    },
  };

  // Iniciar el loop del worker
  await queue.startWorker({
    handlers,
    pollIntervalMs: 1000,
  });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
