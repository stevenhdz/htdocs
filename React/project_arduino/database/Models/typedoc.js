const Sequelize = require('sequelize');
const database = require('../db.js');
 
const TypeDoc = database.define('typedocs', {
    id_typedoc: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    description_type_doc: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
})
 
module.exports = TypeDoc;