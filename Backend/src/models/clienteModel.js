var Sequelize = require("sequelize");
var sequelize = require("./database");

var clientes = sequelize.define(
  "cliente",
  {
    c_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    c_nome: Sequelize.STRING,
    c_idade: Sequelize.INTEGER,
    c_email: Sequelize.STRING,
    c_pwd: Sequelize.STRING,
    c_regiao: Sequelize.STRING,
    c_estrangeiro: Sequelize.BOOLEAN,
    c_pontos: Sequelize.INTEGER,
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = clientes;
