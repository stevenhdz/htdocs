// src/producer.js
// Este archivo SOLO encola trabajos en Redis.
// No ejecuta nada, no env�a correos de verdad.

const JobQueue = require('./jobQueue');

async function main() {
  const queue = new JobQueue('emails');

  const jobs = [];

  // Job 1: deber�a salir bien
  jobs.push(
    await queue.addJob('send_email', {
      to: 'user1@example.com',
      subject: 'Bienvenido',
      body: 'Hola user1 \U0001f44b',
    }, {
      maxAttempts: 3,
    })
  );

  // Job 2: tambi�n deber�a salir bien
  jobs.push(
    await queue.addJob('send_email', {
      to: 'user2@example.com',
      subject: 'Recordatorio',
      body: 'No olvides tu cita ma�ana.',
    }, {
      maxAttempts: 3,
    })
  );

  // Job 3: lo vamos a hacer FALLAR a prop�sito para ver reintentos
  jobs.push(
    await queue.addJob('send_email', {
      to: 'user3@example.com',
      subject: 'Prueba con reintentos',
      body: 'Este correo va a fallar varias veces.',
    }, {
      maxAttempts: 4,  // m�ximo 5 reintentos
    })
  );

  console.log('\n\U0001f4cb Jobs encolados:');
  console.table(
    jobs.map((j) => ({
      id: j.id,
      type: j.type,
      to: j.payload.to,
      maxAttempts: j.maxAttempts,
      status: j.status,
    }))
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
