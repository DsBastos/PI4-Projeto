var Sequelize = require("sequelize");
var sequelize = require("./database");

var visitas = sequelize.define(
    "visita",
    {
        vs_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        vs_data: Sequelize.DATE,
        vs_horas: Sequelize.TIME,
        vs_vagas: Sequelize.INTEGER,
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);

module.exports = visitas;
