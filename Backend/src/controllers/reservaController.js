var reserva = require('../models/reservaModel');
const clientes = require('../models/clienteModel');
const visita = require('../models/VisitaModel');
const pontoTuristico = require('../models/pontoTuristicoModel') 
const controllers = {};
var sequelize = require("../models/database");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const createError = require('http-errors');

controllers.getAllReserva = async (req, res, next) => {
    try {
        /*const data = await reserva.findAll({
            include:[{ all: true, nested: true }]
        });*/
        
        const data = await reserva.findAll({
            include: [{
              model: visita,
              include: [{
                model: pontoTuristico
              }]
            },{
                model: clientes,
            }]
          })

        res.send({ success: true, data: data });
    } catch (error) {
        next(error)
    }
};

controllers.createReserva = async (req, res, next) => {
    const t = await sequelize.transaction();
    try {
        const reserva = await reserva.create(
            {
                npessoas: req.body.rs_nPessoas,
                data: req.body.rs_data,
                estado: req.body.rs_estado,
            },
            { transaction: t }
        );
        await t.commit();
        res.send({ success: true, data: reserva });
    } catch (e) {
        await t.rollback();
        next(e);
    }
};

controllers.getReservaById = async (req, res, next) => {
    try {
        const {id} = req.params
        const data = await reserva.findByPk(id)
        //check if id is not a number
        res.send({ success: true, data: data });
    } catch (error) {
        next(error)
    }
}

controllers.updateReserva = async (req, res, next) => {
    try {
        const { id } = req.params;
        //check if id is not a number
        if (isNaN(id)) return createError.BadRequest("id is not a number")

        const {npessoas,dataReserva,estado} = req.body;
        const data = await reserva.update({
            rs_nPessoas: npessoas,
            rs_data: dataReserva,
            rs_estado: estado,
        },
            {
                where: { rs_id: id }
            })
        res.send({ success: true, data: data, message: "Updated successful" });
    } catch (error) {
        next(error)
    }
}

controllers.deleteReserva = async (req, res, next) => {
    try {
        const { id } = req.params;
        //check if id is not a number
        if (isNaN(id)) return createError.BadRequest("id is not a number")
        const del = await reserva.destroy({
            where: { rs_id: id }
        })
        res.send({ success: true, deleted: del, message: "Deleted successful" });
    } catch (error) {
        next(error)
    }
}
module.exports = controllers;