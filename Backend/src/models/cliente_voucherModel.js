var Sequelize = require("sequelize");
var sequelize = require("./database");

var cliente_voucher = sequelize.define(
    "cliente_voucher",
    {
        c_disponibilidade: Sequelize.BOOLEAN,
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);

module.exports = cliente_voucher;
