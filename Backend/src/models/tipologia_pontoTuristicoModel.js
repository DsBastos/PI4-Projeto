var Sequelize = require("sequelize");
var sequelize = require("./database");

var tipologia_pontoTuristico = sequelize.define(
    "tipologia_pontoTuristico",
    {
        pT_id: {
            type: Sequelize.INTEGER,
            references: 'pontoTuristico',
            referencesKey: 'pT_id',
        },
        tipo_id: {
            type: Sequelize.INTEGER,
            references: 'tipologia',
            referencesKey: 'tipo_id',
        },
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);

module.exports = tipologia_pontoTuristico;
