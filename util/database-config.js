const { index } = require("./database/Index");

function databaseConfig() {
  index();
}

module.exports = { databaseConfig };
