const Sequelize = require('sequelize');
const sequelize = new Sequelize('crud', 'root', 'toor', {dialect: 'mysql', host: 'localhost'});

module.exports = sequelize;