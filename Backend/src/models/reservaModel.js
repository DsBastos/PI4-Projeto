var Sequelize = require("sequelize");
var sequelize = require("./database");

var reservas = sequelize.define(
    "reserva",
    {
        rs_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        rs_npessoas: Sequelize.INTEGER,
        rs_estado: Sequelize.STRING,
        r_aceite: Sequelize.BOOLEAN
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);

module.exports = reservas;
