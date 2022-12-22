const db = require("./database.js");
const tipoUtilizador = require("./tipoUtilizadorModel.js");
const utilizadores = require("./utilizadoresModel.js");
const cliente = require("./clienteModel.js");
const pontoTuristico = require("./pontoTuristicoModel.js");
const recompensa = require("./recompensaModel.js");
const regiaoTuristica = require("./regiaoTuristicaModel.js");
const reserva = require("./reservaModel.js");
const tipologia = require("./tipologiaModel.js");
const visita = require("./visitaModel.js");
const voucher = require("./voucherModel.js");

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

pontoTuristico.hasMany(recompensa, {foreignKey:{name:"pT_id",allowNull:false}});
recompensa.belongsTo(pontoTuristico, {foreignKey:{name:"pT_id",allowNull:false}});

recompensa.hasMany(voucher, {foreignKey:{name:"r_id",allowNull:false}});

cliente.hasMany(reserva, {foreignKey:{name:"c_id",allowNull:false}});
reserva.belongsTo(cliente, {foreignKey:{name:"c_id",allowNull:false}});

visita.hasMany(reserva, {foreignKey:{name:"vs_id",allowNull:false}});
reserva.belongsTo(visita, {foreignKey:{name:"vs_id",allowNull:false}});

db.sync({logging:false});