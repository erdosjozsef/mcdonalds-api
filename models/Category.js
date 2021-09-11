const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Category = sequelize.define("Category", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: Sequelize.STRING,
  seoUrl: Sequelize.STRING,
  imageUrl: Sequelize.STRING,
});

module.exports = Category;
