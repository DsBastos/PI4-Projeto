var Sequelize = require("sequelize");
var sequelize = require("./database");

var websites = sequelize.define(
    "website",
    {
        ws_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        ws_heroi: Sequelize.STRING,
        ws_descarregar: Sequelize.STRING,
        ws_objetivo: Sequelize.STRING,
        ws_pontosT: Sequelize.STRING,
        ws_voucher: Sequelize.STRING,
        ws_reservas: Sequelize.STRING,
        ws_qr: Sequelize.STRING,
        ws_atualizacoes: Sequelize.STRING,
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);

module.exports = websites;
