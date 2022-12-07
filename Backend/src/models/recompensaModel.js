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
        r_descricaoo: Sequelize.STRING,
        r_imagem: Sequelize.STRING,
        r_duracao: Sequelize.STRING,
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);

module.exports = recompensas;
