var agenteTuristico = require('../models/agenteTuristicoModel');

const controllers = {};
var sequelize = require("../models/database");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const createError = require('http-errors')

controllers.getAllAgenteTuristico = async (req, res, next) => {
    try {
        const data = await agenteTuristico.findAll();
        res.send({ success: true, data: data });
    } catch (error) {
        next(error)
    }
};

controllers.createAgenteTuristico = async (req, res, next) => {
    const t = await sequelize.transaction();
    try {
        const agenteTuristico = await agenteTuristico.create(
            {
                nome: req.body.aa_nome,
                email: req.body.aa_email,
                psw: req.body.aa_psw,
            },
            { transaction: t }
        );
        await t.commit();
        res.send({ success: true, data: agenteTuristico });
    } catch (e) {
        await t.rollback();
        next(e);
    }
};

controllers.getAgenteTuristicoById = async (req, res, next) => {
    try {
        const {id} = req.params
        const data = await agenteTuristico.findByPk(id)
        //check if id is not a number
        res.send({ success: true, data: data });
    } catch (error) {
        next(error)
    }
}

controllers.updateAgenteTuristico = async (req, res, next) => {
    try {
        const { id } = req.params;
        //check if id is not a number
        if (isNaN(id)) return createError.BadRequest("id is not a number")

        const {nome,email,psw } = req.body;
        const data = await agenteTuristico.update({
            nome: nome,
            psw:psw,
            email: email,
        },
            {
                where: { aa_id: id }
            })
        res.send({ success: true, data: data, message: "Updated successful" });
    } catch (error) {
        next(error)
    }
}

controllers.deleteAgenteTuristico = async (req, res, next) => {
    try {
        const { id } = req.params;
        //check if id is not a number
        if (isNaN(id)) return createError.BadRequest("id is not a number")
        const del = await agenteTuristico.destroy({
            where: { aa_id: id }
        })
        res.send({ success: true, deleted: del, message: "Deleted successful" });
    } catch (error) {
        next(error)
    }
}
module.exports = controllers;