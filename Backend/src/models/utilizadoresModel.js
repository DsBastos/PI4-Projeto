var Sequelize = require("sequelize");
var sequelize = require("./database");

var utilizadores = sequelize.define(
    "utilizadores",
    {
        u_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        u_nome: Sequelize.STRING,
        u_email: Sequelize.STRING,
        u_pwd: Sequelize.STRING,
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);

module.exports = utilizadores;
