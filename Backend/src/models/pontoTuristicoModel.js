var Sequelize = require("sequelize");
var sequelize = require("./database");

var pontosTuristicos = sequelize.define(
    "pontoTuristicos",
    {
        pT_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        pT_nome: Sequelize.STRING,
        pT_local: Sequelize.STRING,
        pT_dificuldade: Sequelize.INTEGER,
        pT_duracao: Sequelize.TIME,
        pT_terreno: Sequelize.INTEGER,
        pT_tamanho: Sequelize.STRING,
        pT_descricao: Sequelize.STRING,
        pT_horario: Sequelize.STRING,
        pT_coordenadas: Sequelize.STRING,
        pT_link: Sequelize.STRING,
        pT_pontosadquiridos: Sequelize.INTEGER,
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);

module.exports = pontosTuristicos;
