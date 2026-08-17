// src/db.js
const Database = require('better-sqlite3');
const path = require('path');

const dbPath = path.join(__dirname, '..', 'data.sqlite');

// Abrimos una única conexión sin pool (SQLite es embebido)
const db = new Database(dbPath);

// Opcional: modo WAL para mejor concurrencia
// db.pragma('journal_mode = WAL');

module.exports = db;
