var Sequelize = require("sequelize");
var sequelize = require("./database");

var responsaveisregiao = sequelize.define(
    "responsavelregiao",
    {
        rr_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        rr_nome: Sequelize.STRING,
        rr_email: Sequelize.STRING,
        rr_pwd: Sequelize.STRING,
        rr_pntint: Sequelize.INTEGER,
        rr_recompensa: Sequelize.STRING,
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);

module.exports = responsaveisregiao;
