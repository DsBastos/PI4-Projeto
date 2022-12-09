const db = require("./database");
const tipoUtilizador = require("./tipoUtilizadorModel");
const utilizadores = require("./utilizadoresModel");
const cliente = require("./clienteModel");
const pontoTuristico = require("./pontoTuristicoModel");
const recompensa = require("./recompensaModel");
const regiaoTuristica = require("./regiaoTuristicaModel");
const reserva = require("./reservaModel");
const tipologia = require("./tipologiaModel");
const visita = require("./visitaModel");
const voucher = require("./voucherModel");

db.sync({logging:false})





regiaoTuristica.hasMany(regiaoTuristica, {foreignKey:{name:"rt_id",allowNull:false}});

cliente.belongsToMany(voucher,{through:'cliente_voucher'});
voucher.belongsToMany(cliente,{through:'cliente_voucher'});

pontoTuristico.belongsToMany(tipologia,{through:'tipologia_pontoTuristico'});
tipologia.belongsToMany(pontoTuristico,{through:'tipologia_pontoTuristico'});
pontoTuristico.hasMany(recompensa, {foreignKey:{name:"pT_id",allowNull:false}})
pontoTuristico.hasMany(voucher, {foreignKey:{name:"pT_id",allowNull:false}})
pontoTuristico.hasMany(visita, {foreignKey:{name:"pT_id",allowNull:false}})

recompensa.hasMany(voucher, {foreignKey:{name:"r_id",allowNull:false}})

cliente.belongsToMany(pontoTuristico,{through:'cliente_pontoTuristico'});
pontoTuristico.belongsToMany(cliente,{through:'cliente_pontoTuristico'});
cliente.hasMany(reserva, {foreignKey:{name:"c_id",allowNull:false}})
visita.hasMany(reserva, {foreignKey:{name:"vs_id",allowNull:false}})

