const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const ProductFinal = sequelize.define("ProductItems", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  cal: Sequelize.FLOAT,
  name: Sequelize.STRING,
  imageUrl: Sequelize.INTEGER,
});

module.exports = ProductFinal;
