var Sequelize = require("sequelize");
var sequelize = require("./database");

var admins = sequelize.define(
    "admin",
    {
        adm_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        adm_nome: Sequelize.STRING,
        adm_email: Sequelize.STRING,
        adm_psw: Sequelize.STRING,
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);

module.exports = admins;
