var Sequelize = require("sequelize");
var sequelize = require("./database");

var tipoutilizador = sequelize.define(
    "tipoutilizador",
    {
        tu_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        tu_tipo: Sequelize.STRING,
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);

module.exports = tipoutilizador;
