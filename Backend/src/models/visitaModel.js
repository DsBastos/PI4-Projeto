var Sequelize = require("sequelize");
var sequelize = require("./database");
var pontoTuristico = require("./pontoTuristicoModel.js")

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

pontoTuristico.hasMany(visitas, {foreignKey:{name:"pt_id",allowNull:false}});
visitas.belongsTo(pontoTuristico, {foreignKey:{name:"pt_id",allowNull:false}});

module.exports = visitas;
