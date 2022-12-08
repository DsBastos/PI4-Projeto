var responsavelRegiao = require('../models/responsavelRegiaoModel');

const controllers = {};
var sequelize = require("../models/database");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const createError = require('http-errors')

controllers.getAllResponsavelRegiao = async (req, res, next) => {
    try {
        const data = await responsavelRegiao.findAll();
        res.send({ success: true, data: data });
    } catch (error) {
        next(error)
    }
};

controllers.createResponsavelRegiao = async (req, res, next) => {
    const t = await sequelize.transaction();
    try {
        const responsavelRegiao = await responsavelRegiao.create(
            {
                nome: req.body.rr_nome,
                email: req.body.rr_email,
                pwd: req.body.rr_pwd,
            },
            { transaction: t }
        );
        await t.commit();
        res.send({ success: true, data: concelhoTuristico });
    } catch (e) {
        await t.rollback();
        next(e);
    }
};

controllers.getResponsavelRegiaoById = async (req, res, next) => {
    try {
        const {id} = req.params
        const data = await responsavelRegiao.findByPk(id)
        //check if id is not a number
        res.send({ success: true, data: data });
    } catch (error) {
        next(error)
    }
}

controllers.updateResponsavelRegiao = async (req, res, next) => {
    try {
        const { id } = req.params;
        //check if id is not a number
        if (isNaN(id)) return createError.BadRequest("id is not a number")

        const {nome,email,pwd} = req.body;
        const data = await responsavelRegiao.update({
            rr_nome: nome,
            rr_email: email,
            rr_pwd: pwd,
        },
            {
                where: { rr_id: id }
            })
        res.send({ success: true, data: data, message: "Updated successful" });
    } catch (error) {
        next(error)
    }
}

controllers.deleteResponsavelRegiao = async (req, res, next) => {
    try {
        const { id } = req.params;
        //check if id is not a number
        if (isNaN(id)) return createError.BadRequest("id is not a number")
        const del = await responsavelRegiao.destroy({
            where: { rr_id: id }
        })
        res.send({ success: true, deleted: del, message: "Deleted successful" });
    } catch (error) {
        next(error)
    }
}
module.exports = controllers;