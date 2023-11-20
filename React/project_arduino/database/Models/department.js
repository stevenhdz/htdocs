const Sequelize = require('sequelize');
const database = require('../db.js');

const Department = database.define('Departamento', {
  id_department: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  desc_department: {
    type: Sequelize.STRING(50),
    allowNull: false,
    unique: true
  }
});

module.exports = Department;