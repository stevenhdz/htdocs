const Sequelize = require('sequelize');
const database = require('../db.js');
 
const Rol = database.define('rols', {
    id_rol: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    description_rol: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
})
 
module.exports = Rol;
