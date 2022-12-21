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

tipoUtilizador.hasMany(utilizadores, {foreignKey:{name:"tu_id",allowNull:false}});
utilizadores.belongsTo(tipoUtilizador, {foreignKey:{name:"tu_id",allowNull:false}});

pontoTuristico.belongsTo(utilizadores, {foreignKey:{name:"u_id",allowNull:true}});

regiaoTuristica.hasMany(utilizadores, {foreignKey:{name:"rt_id",allowNull:true}});
utilizadores.belongsTo(regiaoTuristica, {foreignKey:{name:"rt_id",allowNull:true}});

utilizadores.hasMany(pontoTuristico, {foreignKey:{name:"u_id",allowNull:false}});
regiaoTuristica.hasMany(pontoTuristico, {foreignKey:{name:"rt_id",allowNull:false}});

cliente.belongsToMany(voucher,{through:'cliente_voucher'});
voucher.belongsToMany(cliente,{through:'cliente_voucher'});

pontoTuristico.belongsToMany(tipologia,{through:'tipologia_pontoTuristico'});
tipologia.belongsToMany(pontoTuristico,{through:'tipologia_pontoTuristico'});

pontoTuristico.hasMany(recompensa, {foreignKey:{name:"pT_id",allowNull:false}})
pontoTuristico.hasMany(visita, {foreignKey:{name:"pT_id",allowNull:false}}) 

//pontoTuristico.hasMany(reserva, {foreignKey:{name:"v_id",allowNull:false}}) 

recompensa.hasMany(voucher, {foreignKey:{name:"r_id",allowNull:false}})

cliente.hasMany(reserva, {foreignKey:{name:"c_id",allowNull:false}})
reserva.belongsTo(cliente, {foreignKey:{name:"c_id",allowNull:false}})

visita.hasMany(reserva, {foreignKey:{name:"vs_id",allowNull:false}})

db.sync()