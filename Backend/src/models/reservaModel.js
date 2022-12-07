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
        rs_nPessoas: Sequelize.INTEGER,
        rs_data: Sequelize.DATE,
        rs_estado: Sequelize.STRING
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);

module.exports = reservas;
