var regiaoTuristica = require('../models/regiaoTuristicaModel');

const controllers = {};
var sequelize = require("../models/database");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const createError = require('http-errors')

controllers.getAllRegiaoTuristica = async (req, res, next) => {
    try {
        const data = await regiaoTuristica.findAll();
        res.send({ success: true, data: data });
    } catch (error) {
        next(error)
    }
};

controllers.createRegiaoTuristica = async (req, res, next) => {
    const t = await sequelize.transaction();
    try {
        const regiaoTuristica = await regiaoTuristica.create(
            {
                nome: req.body.rt_nome,
            },
            { transaction: t }
        );
        await t.commit();
        res.send({ success: true, data: regiaoTuristica });
    } catch (e) {
        await t.rollback();
        next(e);
    }
};

controllers.getRegiaoTuristicaById = async (req, res, next) => {
    try {
        const {id} = req.params
        const data = await regiaoTuristica.findByPk(id)
        //check if id is not a number
        res.send({ success: true, data: data });
    } catch (error) {
        next(error)
    }
}

controllers.updateRegiaoTuristica = async (req, res, next) => {
    try {
        const { id } = req.params;
        //check if id is not a number
        if (isNaN(id)) return createError.BadRequest("id is not a number")

        const {nome} = req.body;
        const data = await regiaoTuristica.update({
            rt_nome: nome,
        },
            {
                where: { rt_id: id }
            })
        res.send({ success: true, data: data, message: "Updated successful" });
    } catch (error) {
        next(error)
    }
}

controllers.deleteRegiaoTuristica = async (req, res, next) => {
    try {
        const { id } = req.params;
        //check if id is not a number
        if (isNaN(id)) return createError.BadRequest("id is not a number")
        const del = await regiaoTuristica.destroy({
            where: { rt_id: id }
        })
        res.send({ success: true, deleted: del, message: "Deleted successful" });
    } catch (error) {
        next(error)
    }
}
module.exports = controllers;