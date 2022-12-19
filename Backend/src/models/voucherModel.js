var Sequelize = require("sequelize");
var sequelize = require("./database");

var vouchers = sequelize.define(
    "voucher",
    {
        v_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        v_dtinicio: Sequelize.DATE,
        v_dtfim: Sequelize.DATE,
        v_pontos: Sequelize.INTEGER,
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);

module.exports = vouchers;
