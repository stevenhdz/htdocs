const Sequelize = require('sequelize');
const database = require('../db.js');

const Municipality = database.define('Municipio', {
    id_municipality : {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    desc_municipality : {
      type: Sequelize.STRING(50),
      allowNull: false,
      unique: true
    }
});

module.exports = Municipality;