const Sequelize = require("sequelize");
const database = require("../db.js");

const Place = database.define("places", {
  id_place: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  detail: {
    type: Sequelize.STRING(100),
    allowNull: true,
  },
  georeference: {
    type: Sequelize.STRING(50),
    allowNull: true,
  },
});

module.exports = Place;
