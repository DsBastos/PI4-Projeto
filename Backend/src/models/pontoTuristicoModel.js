var Sequelize = require("sequelize");
var sequelize = require("./database");

var pontosTuristicos = sequelize.define(
    "pontoturistico",
    {
        pt_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        pt_nome: Sequelize.STRING,
        pt_dificuldade: Sequelize.INTEGER,
        pt_duracao: Sequelize.TIME,
        pt_terreno: Sequelize.INTEGER,
        pt_tamanho: Sequelize.STRING,
        pt_descricao: Sequelize.STRING,
        pt_horario: Sequelize.STRING,
        pt_coordenadas: Sequelize.STRING,
        pt_link: Sequelize.STRING,
        pt_pontosadquiridos: Sequelize.INTEGER,
        pt_regiao:Sequelize.STRING,
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);

module.exports = pontosTuristicos;
