var Sequelize = require("sequelize");
var sequelize = require("./database");

var website = sequelize.define(
    "website",
    {
        ws_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        ws_nome: Sequelize.STRING,
        ws_texto: Sequelize.STRING,
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);

module.exports = website;
