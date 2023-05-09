const { Sequelize } = require('sequelize');
 /* local */
 const sequelize = new Sequelize('FreeEnergy', 'prueba','', {
    host: 'localhost',
    dialect: 'mysql',
    port: '8889'
  });

/* docker */
/*   const sequelize = new Sequelize('FreeEnergy', 'root','root', {
    host: 'localhost',
    dialect: 'mysql',
    port: '3306'
  }); */

module.exports = sequelize;