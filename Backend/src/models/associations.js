const db = require("./database");
const admin = require("./adminModel");
const agenteTuristico = require("./agenteTuristicoModel");
const cliente = require("./clienteModel");
const pontoTuristico = require("./pontoTuristicoModel");
const recompensa = require("./recompensaModel");
const regiaoTuristica = require("./regiaoTuristicaModel");
const reserva = require("./reservaModel");
const responsavelRegiao = require("./responsavelRegiaoModel");
const tipologia = require("./tipologiaModel");
const visita = require("./visitaModel");
const voucher = require("./voucherModel");
const website = require("./websiteModel");
const cliente_voucher = require("./cliente_voucherModel");

db.sync({logging:false})

website.hasMany(admin, {foreignKey:{name:"ws_id",allowNull:false}});

admin.hasMany(responsavelRegiao, {foreignKey:{name:"adm_id",allowNull:false}});

regiaoTuristica.hasMany(responsavelRegiao, {foreignKey:{name:"rt_id",allowNull:false}});
regiaoTuristica.hasMany(regiaoTuristica, {foreignKey:{name:"rt_id",allowNull:false}});

responsavelRegiao.hasMany(recompensa, {foreignKey:{name:"rr_id",allowNull:false}});
responsavelRegiao.hasMany(agenteTuristico, {foreignKey:{name:"rr_id",allowNull:false}});

agenteTuristico.hasMany(pontoTuristico, {foreignKey:{name:"aa_id",allowNull:false}})

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

