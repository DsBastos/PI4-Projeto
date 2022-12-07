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

db.sync({logging:false})