var tipologia = require('../models/tipologiaModel');

const controllers = {};
var sequelize = require("../models/database");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const createError = require('http-errors')

controllers.getAllTipologia = async (req, res, next) => {
    try {
        const data = await tipologia.findAll();
        res.send({ success: true, data: data });
    } catch (error) {
        next(error)
    }
};

controllers.createTipologia = async (req, res, next) => {
    const t = await sequelize.transaction();
    try {
        const tipologia = await tipologia.create(
            {
                nome: req.body.tipo_nome,
                descricao: req.body.tipo_descricao,
            },
            { transaction: t }
        );
        await t.commit();
        res.send({ success: true, data: tipologia });
    } catch (e) {
        await t.rollback();
        next(e);
    }
};

controllers.getTipologiaById = async (req, res, next) => {
    try {
        const {id} = req.params
        const data = await tipologia.findByPk(id)
        //check if id is not a number
        res.send({ success: true, data: data });
    } catch (error) {
        next(error)
    }
}

controllers.updateTipologia = async (req, res, next) => {
    try {
        const { id } = req.params;
        //check if id is not a number
        if (isNaN(id)) return createError.BadRequest("id is not a number")

        const {nome,descricao} = req.body;
        const data = await tipologia.update({
            tipo_nome: nome,
            tipo_descricao:descricao
        },
            {
                where: { tipo_id: id }
            })
        res.send({ success: true, data: data, message: "Updated successful" });
    } catch (error) {
        next(error)
    }
}

controllers.deleteTipologia = async (req, res, next) => {
    try {
        const { id } = req.params;
        //check if id is not a number
        if (isNaN(id)) return createError.BadRequest("id is not a number")
        const del = await tipologia.destroy({
            where: { tipo_id: id }
        })
        res.send({ success: true, deleted: del, message: "Deleted successful" });
    } catch (error) {
        next(error)
    }
}
module.exports = controllers;