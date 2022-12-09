var utilizador = require('../models/tipoUtilizadorModel');

const controllers = {};
var sequelize = require("../models/database");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const createError = require('http-errors')

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
module.exports = controllers;