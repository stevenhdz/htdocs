const Sequelize = require('sequelize');
const database = require('../db.js');
 
const Status = database.define('status', {
    id_status: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    description_status: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
})
 
module.exports = Status;