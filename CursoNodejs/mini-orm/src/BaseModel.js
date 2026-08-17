// src/BaseModel.js
const db = require('./db');

class BaseModel {
  constructor(props = {}) {
    this.constructor._initColumns();

    for (const col of this.constructor._columns) {
      this[col] = props[col] ?? null;
    }
  }

  static _initColumns() {
    if (!this.schema) {
      throw new Error(`El modelo ${this.name} debe definir static get schema()`);
    }

    if (!this.table) {
      throw new Error(`El modelo ${this.name} debe definir static get table()`);
    }

    if (!this._columns) {
      this._columns = Object.keys(this.schema);
    }
  }

  static _prepareInsert() {
    this._initColumns();

    if (this._insertStmt) return;

    const cols = this._columns.filter((c) => c !== 'id');
    const placeholders = cols.map(() => '?').join(', ');

    const sql = `
      INSERT INTO ${this.table} (${cols.join(', ')})
      VALUES (${placeholders})
    `;

    this._insertColumns = cols;
    this._insertStmt = db.prepare(sql);
  }

  static sync() {
    this._initColumns();

    const cols = this._columns.map((col) => {
      return `${col} ${this.schema[col]}`;
    });

    const sql = `
      CREATE TABLE IF NOT EXISTS ${this.table} (
        ${cols.join(', ')}
      );
    `;

    db.prepare(sql).run();
  }

  static drop() {
    const sql = `DROP TABLE IF EXISTS ${this.table};`;
    db.prepare(sql).run();
  }

  static insertOne(data) {
    this._prepareInsert();

    const instance = new this(data);
    const params = this._insertColumns.map((c) => instance[c]);

    const info = this._insertStmt.run(params);

    instance.id = info.lastInsertRowid;
    return instance;
  }

  static insertMany(rows) {
    if (!Array.isArray(rows)) {
      throw new Error('insertMany espera un array de objetos');
    }

    return rows.map((row) => this.insertOne(row));
  }

  static bulkInsert(rows) {
    if (!Array.isArray(rows)) {
      throw new Error('bulkInsert espera un array de objetos');
    }

    this._prepareInsert();

    const insertManyInTx = db.transaction((rowsList) => {
      const created = [];

      for (const row of rowsList) {
        const instance = new this(row);
        const params = this._insertColumns.map((c) => instance[c]);
        const info = this._insertStmt.run(params);
        instance.id = info.lastInsertRowid;
        created.push(instance);
      }

      return created;
    });

    return insertManyInTx(rows);
  }
}

module.exports = BaseModel;
