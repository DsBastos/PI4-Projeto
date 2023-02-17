var Sequelize = require("sequelize");
var sequelize = require("./database");

var cliente_voucher = sequelize.define(
  "cliente_voucher",
  {
    c_id: {
      type: Sequelize.INTEGER,
      references: 'cliente',
      referencesKey: 'c_id',
    },
    v_id: {
      type: Sequelize.INTEGER,
      references: 'voucher',
      referencesKey: 'v_id',
    },
    cv_disponibilidade: Sequelize.BOOLEAN,
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);
module.exports = cliente_voucher;
