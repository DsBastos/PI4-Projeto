var visita = require('../models/VisitaModel');

const controllers = {};
var sequelize = require("../models/database");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const createError = require('http-errors')

controllers.getAllVisita = async (req, res, next) => {
    try {
        const data = await visita.findAll();
        res.send({ success: true, data: data });
    } catch (error) {
        next(error)
    }
};

controllers.createVisita = async (req, res, next) => {
    const t = await sequelize.transaction();
    try {
        const visita = await visita.create(
            {
                datas: req.body.vs_data,
                horas: req.body.vs_horas,
                vagas: req.body.vs_vagas
            },
            { transaction: t }
        );
        await t.commit();
        res.send({ success: true, data: visita });
    } catch (e) {
        await t.rollback();
        next(e);
    }
};

controllers.getVisitaById = async (req, res, next) => {
    try {
        const {id} = req.params
        const data = await visita.findByPk(id)
        //check if id is not a number
        res.send({ success: true, data: data });
    } catch (error) {
        next(error)
    }
}

controllers.updateVisita = async (req, res, next) => {
    try {
        const { id } = req.params;
        //check if id is not a number
        if (isNaN(id)) return createError.BadRequest("id is not a number")

        const {dataVisita,hora,vagas} = req.body;
        const data = await visita.update({
            vs_data:dataVisita,
            vs_horas:hora,
            vs_vagas:vagas,
        },
            {
                where: { vs_id: id }
            })
        res.send({ success: true, data: data, message: "Updated successful" });
    } catch (error) {
        next(error)
    }
}

controllers.deleteVisita = async (req, res, next) => {
    try {
        const { id } = req.params;
        //check if id is not a number
        if (isNaN(id)) return createError.BadRequest("id is not a number")
        const del = await visita.destroy({
            where: { vs_id: id }
        })
        res.send({ success: true, deleted: del, message: "Deleted successful" });
    } catch (error) {
        next(error)
    }
}
module.exports = controllers;