var tipologia_pontoTuristico = require('../models/tipologia_pontoTuristicoModel');

const controllers = {};
var sequelize = require("../models/database");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const createError = require('http-errors')

controllers.getAllTipologiaPontoTuristico = async (req, res, next) => {
    try {
        const data = await tipologiaPontoTuristico.findAll();
        res.send({ success: true, data: data });
    } catch (error) {
        next(error)
    }
};

controllers.createClienteVoucher = async (req, res, next) => {
    const t = await sequelize.transaction();
    try {
        const tipologiaPontoTuristico = await tipologiaPontoTuristico.create(
            {
                c_disponibilidade: req.body.c_disponibilidade,
            },
            { transaction: t }
        );
        await t.commit();
        res.send({ success: true, data: cliente });
    } catch (e) {
        await t.rollback();
        next(e);
    }
};

controllers.getClienteVoucherById = async (req, res, next) => {
    try {
        const {id} = req.params
        const data = await tipologiaPontoTuristico.findByPk(id)
        //check if id is not a number
        res.send({ success: true, data: data });
    } catch (error) {
        next(error)
    }
}

controllers.updateClienteVoucher = async (req, res, next) => {
    try {
        const { id } = req.params;
        //check if id is not a number
        if (isNaN(id)) return createError.BadRequest("id is not a number")

        const { c_disponibilidade} = req.body;
        const data = await tipologiaPontoTuristico.update({
            disponibilidade: c_disponibilidade,
        },)
        res.send({ success: true, data: data, message: "Updated successful" });
    } catch (error) {
        next(error)
    }
}

controllers.deleteClienteVoucher = async (req, res, next) => {
    try {
        const { id } = req.params;
        //check if id is not a number
        if (isNaN(id)) return createError.BadRequest("id is not a number")
        const del = await tipologiaPontoTuristico.destroy
        res.send({ success: true, deleted: del, message: "Deleted successful" });
    } catch (error) {
        next(error)
    }
}
module.exports = controllers;