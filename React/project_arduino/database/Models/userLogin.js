const Sequelize = require('sequelize');
const database = require('../db.js');
 
const UserLogin = database.define('credentials', {
    id_credentials: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    usuario: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    number_doc: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
    },
});
 
module.exports = UserLogin;