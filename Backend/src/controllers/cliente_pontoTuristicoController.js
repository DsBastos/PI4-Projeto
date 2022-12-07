var cliente_pontoTuristico = require('../models/cliente_pontoTuristicoModel');

const controllers = {};
var sequelize = require("../models/database");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const createError = require('http-errors')

controllers.getAllClientePontoTuristico = async (req, res, next) => {
    try {
        const data = await clientePontoTuristico.findAll();
        res.send({ success: true, data: data });
    } catch (error) {
        next(error)
    }
};

controllers.createClientePontoTuristico = async (req, res, next) => {
    const t = await sequelize.transaction();
    try {
        const clientePontoTuristico = await clientePontoTuristico.create(
            {
                c_historicoPntInteresse: req.body.c_historicoPntInteresse,
                c_historicoLocal: req.body.c_historicoLocal,
                c_historicoData: req.body.c_historicoData,
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

controllers.getClientePontoTuristicoById = async (req, res, next) => {
    try {
        const {id} = req.params
        const data = await clientePontoTuristico.findByPk(id)
        //check if id is not a number
        res.send({ success: true, data: data });
    } catch (error) {
        next(error)
    }
}

controllers.updateClientePontoTuristico = async (req, res, next) => {
    try {
        const { id } = req.params;
        //check if id is not a number
        if (isNaN(id)) return createError.BadRequest("id is not a number")

        const { c_historicoPntInteresse, c_historicoLocal,c_historicoData } = req.body;
        const data = await clientePontoTuristico.update({
            historicoPntInteresse: c_historicoPntInteresse,
            historicoLocal:c_historicoLocal,
            historicoData: c_historicoData,
        },)
        res.send({ success: true, data: data, message: "Updated successful" });
    } catch (error) {
        next(error)
    }
}

controllers.deleteClientePontoTuristico = async (req, res, next) => {
    try {
        const { id } = req.params;
        //check if id is not a number
        if (isNaN(id)) return createError.BadRequest("id is not a number")
        const del = await clientePontoTuristico.destroy
        res.send({ success: true, deleted: del, message: "Deleted successful" });
    } catch (error) {
        next(error)
    }
}
module.exports = controllers;