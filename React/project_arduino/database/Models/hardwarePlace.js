const Sequelize = require('sequelize');
const database = require('../db.js');

const Hardware_place = database.define('hardware_place', {
    id_h_v: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    }
  });
  
  module.exports = Hardware_place;