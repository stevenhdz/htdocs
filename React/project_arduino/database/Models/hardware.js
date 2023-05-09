const Sequelize = require('sequelize');
const database = require('../db.js');

const Hardware = database.define('Hardware', {
    id_hardware: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ip: {
      type: Sequelize.STRING(15),
      allowNull: false,
      unique: true,
    },
    mac: {
      type: Sequelize.STRING(17),
      allowNull: false,
      unique: true,
    },
    version_firmware: {
      type: Sequelize.STRING(20),
      allowNull: false,
    },
    status: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    }
})

module.exports = Hardware;