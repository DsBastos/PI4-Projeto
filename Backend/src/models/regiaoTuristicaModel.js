var Sequelize = require("sequelize");
var sequelize = require("./database");

var regioesTuristicas = sequelize.define(
    "regiaoturistica",
    {
        rt_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        rt_nome: Sequelize.STRING,
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);

module.exports = regioesTuristicas;
