const db = require("./database");
const tipoUtilizadores = require("./tipoUtilizadorModel");
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




tipoUtilizadores.hasMany(utilizadores, {foreignKey:{name:"tu_id",allowNull:false}});

utilizadores.hasMany(pontoTuristico, {foreignKey:{name:"u_id",allowNull:false}});

regiaoTuristica.hasMany(utilizadores, {foreignKey:{name:"rt_id",allowNull:false}});
regiaoTuristica.hasMany(pontoTuristico, {foreignKey:{name:"rt_id",allowNull:false}});

cliente.belongsToMany(voucher,{through:'cliente_voucher'});
cliente.hasMany(reserva, {foreignKey:{name:"c_id",allowNull:false}})

voucher.belongsToMany(cliente,{through:'cliente_voucher'});

tipologia.belongsToMany(pontoTuristico,{through:'tipologia_pontoTuristico'});

pontoTuristico.belongsToMany(tipologia,{through:'tipologia_pontoTuristico'});
pontoTuristico.hasMany(recompensa, {foreignKey:{name:"pT_id",allowNull:false}})
pontoTuristico.hasMany(visita, {foreignKey:{name:"pT_id",allowNull:false}})

recompensa.hasMany(voucher, {foreignKey:{name:"r_id",allowNull:false}})

visita.hasMany(reserva, {foreignKey:{name:"vs_id",allowNull:false}})