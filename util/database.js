const Sequelize = require("sequelize");
const db = {};

sequelize = new Sequelize("mcdonalds", "root", "password", {
  host: "",
  dialect: "mysql",
  operatorsAliases: false,
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = sequelize;
