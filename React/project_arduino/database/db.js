const { Sequelize } = require('sequelize');
/* local */
/*  const sequelize = new Sequelize('FreeEnergy', 'stevenhdz','root', {
    host: 'localhost',
    dialect: 'mysql',
    port: '3306'
  }); */

const sequelize = new Sequelize('FreeEnergy', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  port: '33060'
});

module.exports = sequelize;