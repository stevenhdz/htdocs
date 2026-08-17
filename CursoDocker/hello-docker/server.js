const express = require('express');
const dayjs = require('dayjs');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (_req, res) => {
  const ahora = dayjs().format('YYYY-MM-DD HH:mm:ss');
  res.send(`Hola mundo — hora actual: ${ahora}`);
});

app.get('/health', (_req, res) => res.json({ ok: true }));

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
