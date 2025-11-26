// src/models/User.js
const BaseModel = require('../BaseModel');

class User extends BaseModel {
  static get table() {
    return 'users';
  }

  static get schema() {
    return {
      id: 'INTEGER PRIMARY KEY AUTOINCREMENT',
      name: 'TEXT NOT NULL',
      email: 'TEXT NOT NULL UNIQUE',
      age: 'INTEGER',
      created_at: 'TEXT NOT NULL'
    };
  }
}

module.exports = User;
