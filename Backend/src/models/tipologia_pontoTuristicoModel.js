var Sequelize = require("sequelize");
var sequelize = require("./database");

var tipologia_pontoTuristico = sequelize.define(
    "tipologia_pontoTuristico",
    {
        freezeTableName: true,
        timestamps: false,
    }
);

module.exports = tipologia_pontoTuristico;
