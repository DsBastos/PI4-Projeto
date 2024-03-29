var Sequelize = require("sequelize");
var sequelize = require("./database");

var recompensas = sequelize.define(
  "recompensa",
  {
    r_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    r_nome: Sequelize.STRING,
    r_descricao: Sequelize.STRING,
    r_pontos: Sequelize.INTEGER,
    r_imagem: Sequelize.STRING,
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = recompensas;
