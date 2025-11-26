// src/redis.js

const Redis = require('ioredis');

// Conexi�n al Redis que tienes en Podman: puerto 6379
const redis = new Redis({
  host: '127.0.0.1',
  port: 6379,
});

redis.on('connect', () => {
  console.log('\U0001f50c [Redis] Conectado a Redis');
});

redis.on('error', (err) => {
  console.error('\U0001f4a5 [Redis] Error de conexi�n:', err.message);
});

module.exports = redis;