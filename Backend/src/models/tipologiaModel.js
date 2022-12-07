var Sequelize = require("sequelize");
var sequelize = require("./database");

var tipologias = sequelize.define(
    "tipologia",
    {
        tipo_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        tipo_nome: Sequelize.STRING,
        tipo_descricao: Sequelize.STRING,
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);

module.exports = tipologias;
