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
        vs_data: Sequelize.STRING,
        vs_horas: Sequelize.STRING,
        vs_vagas: Sequelize.STRING,
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);

module.exports = visitas;
