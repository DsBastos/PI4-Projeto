var reserva = require('../models/reservaModel');

const controllers = {};
var sequelize = require("../models/database");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const createError = require('http-errors')

controllers.getAllReserva = async (req, res, next) => {
    try {
        const data = await reserva.findAll();
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

        const {nome} = req.body;
        const data = await reserva.update({
            rs_nPessoas: nome,
        },
            {
                where: { cT_id: id }
            })
        res.send({ success: true, data: data, message: "Updated successful" });
    } catch (error) {
        next(error)
    }
}

controllers.deleteConcelhoTuristico = async (req, res, next) => {
    try {
        const { id } = req.params;
        //check if id is not a number
        if (isNaN(id)) return createError.BadRequest("id is not a number")
        const del = await concelhoTuristico.destroy({
            where: { cT_id: id }
        })
        res.send({ success: true, deleted: del, message: "Deleted successful" });
    } catch (error) {
        next(error)
    }
}
module.exports = controllers;