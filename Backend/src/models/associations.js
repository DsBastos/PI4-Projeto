const db = require("./database");
const admin = require("./admin");
const agenteTuristico = require("./agenteTuristico");
const cliente = require("./cliente");
const pontoTuristico = require("./pontoTuristico");
const recompensa = require("./recompensa");
const regiaoTuristica = require("./regiaoTuristica");
const reserva = require("./reserva");
const responsavelRegiao = require("./responsavelRegiao");
const tipologia = require("./tipologia");
const visita = require("./visita");
const voucher = require("./voucher");
const website = require("./website");
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

