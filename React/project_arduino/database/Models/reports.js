const Sequelize = require('sequelize');
const database = require('../db.js');

const Report = database.define('Reports', {
    id_report: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    fecha_carga: {
      type: Sequelize.DATEONLY,
      allowNull: false
    },
    nivel_carga: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  });
  
  module.exports = Report;