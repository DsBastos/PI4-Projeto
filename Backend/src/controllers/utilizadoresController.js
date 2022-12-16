var utilizador = require('../models/tipoUtilizadorModel');

const controllers = {};
var sequelize = require("../models/database");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const createError = require('http-errors');
const reservas = require('../models/reservaModel');
const vouchers = require('../models/voucherModel');
const visitas = require('../models/visitaModel');
const recompensas = require('../models/recompensaModel');
const pontosTuristicos = require('../models/pontoTuristicoModel');
const clientes = require('../models/clienteModel');

controllers.getAllUtilizador = async (req, res, next) => {
    try {
        const data = await utilizador.findAll();
        res.send({ success: true, data: data });
    } catch (error) {
        next(error)
    }
};

controllers.createUtilizador = async (req, res, next) => {
    const t = await sequelize.transaction();
    try {
        const utilizador = await utilizador.create(
            {
                nome: req.body.u_nome,
                email: req.body.u_email,
                pwd: req.body.u_pwd,
            },
            { transaction: t }
        );
        await t.commit();
        res.send({ success: true, data: utilizador });
    } catch (e) {
        await t.rollback();
        next(e);
    }
};

controllers.getUtilizadorById = async (req, res, next) => {
    try {
        const {id} = req.params
        const data = await utilizador.findByPk(id)
        //check if id is not a number
        res.send({ success: true, data: data });
    } catch (error) {
        next(error)
    }
}

controllers.updateUtilizador = async (req, res, next) => {
    try {
        const { id } = req.params;
        //check if id is not a number
        if (isNaN(id)) return createError.BadRequest("id is not a number")

        const {nome, email, pwd} = req.body;
        const data = await utilizador.update({
            u_nome: nome,
            u_email: email,
            u_pwd: pwd,
        },
            {
                where: { u_id: id }
            })
        res.send({ success: true, data: data, message: "Updated successful" });
    } catch (error) {
        next(error)
    }
}

controllers.deleteUtilizador = async (req, res, next) => {
    try {
        const { id } = req.params;
        //check if id is not a number
        if (isNaN(id)) return createError.BadRequest("id is not a number")
        const del = await utilizador.destroy({
            where: { u_id: id }
        })
        res.send({ success: true, deleted: del, message: "Deleted successful" });
    } catch (error) {
        next(error)
    }
}

//Funções de count
//Devia estar uma função apenas a retornar um count, mas assim vai facilitar-nos o trabalho no frontend

controllers.getCountDashboardAdmin  = async (req, res, next) => {
    try {
        const countRT = await utilizador.count({
            where: {
                tu_id: 2
            }
        });
        const countAT = await utilizador.count({
            where: {
                tu_id: 3
            }
        });
        const countReservas = await reservas.count({
 
        });
        const countVouchers = await vouchers.count({

        });
        const countClientes = await clientes.count({

        });
        res.send({ success: true, data: [countRT,countAT,countReservas,countVouchers,countClientes] });
    } catch (error) {
        next(error)
    }
}

controllers.getCountDashboardRT  = async (req, res, next) => {
    try {
        const countAT = await utilizador.count({
            where: {
                tu_id: 3
            }
        });
        const countPontoTuristico = await reservas.count({
 
        });
        const countVouchers = await vouchers.count({

        });
        res.send({ success: true, data: [countAT,countPontoTuristico,countVouchers] });
    } catch (error) {
        next(error)
    }
}

controllers.getCountDashboardAT  = async (req, res, next) => {
    try {
        const countVisitas = await utilizador.count({
            where: {
                tu_id: 3
            }
        });
        const countReservas = await reservas.count({
 
        });
        res.send({ success: true, data: [{countVisitas},{countReservas}]});
    } catch (error) {
        next(error)
    }
}

module.exports = controllers;