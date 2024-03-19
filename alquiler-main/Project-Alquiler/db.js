const { Sequelize } = require('sequelize'); //ORM
require("dotenv").config();


//xampp
const sequelize = new Sequelize(process.env.database, process.env.user, process.env.password, {
    host: "localhost",
    dialect: 'mysql',
    port: '33060'
})

module.exports = sequelize;