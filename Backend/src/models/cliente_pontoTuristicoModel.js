var Sequelize = require("sequelize");
var sequelize = require("./database");

var cliente_pontoTuristico = sequelize.define(
    "cliente_pontoTuristico",
    {
        c_historicoPntInteresse: Sequelize.STRING,
        c_historicoLocal: Sequelize.STRING,
        c_historicoData: Sequelize.DATE,
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);

module.exports = cliente_pontoTuristico;
