var Sequelize = require("sequelize");
var sequelize = require("./database");

var agentesTuristicos = sequelize.define(
    "agenteTuristico",
    {
        aa_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        aa_nome: Sequelize.STRING,
        aa_email: Sequelize.STRING,
        aa_psw: Sequelize.STRING,
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);

module.exports = agentesTuristicos;
