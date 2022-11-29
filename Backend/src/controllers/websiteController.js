var website = require('../models/websiteModel');

const controllers = {};
var sequelize = require("../models/database");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const createError = require('http-errors')

controllers.getAllWebsite = async (req, res, next) => {
    try {
        const data = await website.findAll();
        res.send({ success: true, data: data });
    } catch (error) {
        next(error)
    }
};

controllers.createWebsite = async (req, res, next) => {
    const t = await sequelize.transaction();
    try {
        const website = await website.create(
            {
                heroi: req.body.ws_heroi,
                descarregar: req.body.ws_descarregar,
                objetivo: req.body.ws_objetvo,
                pontosT: req.body.ws_pontosT,
                voucher: req.body.ws_voucher,
                reservas: req.body.ws_reservas,
                qr: req.body.ws_qr,
                atualizacoes: req.body.ws_atualizacoes,
            },
            { transaction: t }
        );
        await t.commit();
        res.send({ success: true, data: website });
    } catch (e) {
        await t.rollback();
        next(e);
    }
};

controllers.getWebsiteById = async (req, res, next) => {
    try {
        const {id} = req.params
        const data = await website.findByPk(id)
        //check if id is not a number
        res.send({ success: true, data: data });
    } catch (error) {
        next(error)
    }
}

controllers.updateWebsite = async (req, res, next) => {
    try {
        const { id } = req.params;
        //check if id is not a number
        if (isNaN(id)) return createError.BadRequest("id is not a number")

        const {heroi,descarregar,objetivo,pontosT,voucher,reservas,qr,atualizacoes} = req.body;
        const data = await concelhoTuristico.update({
            ws_heroi: heroi,
            ws_descarregar: descarregar,
            ws_objetivo:objetivo,
            ws_pontosT:pontosT,
            ws_voucher:voucher,
            ws_reservas:reservas,
            ws_qr: qr,
            ws_atualizacoes:atualizacoes
        },
            {
                where: { ws_id: id }
            })
        res.send({ success: true, data: data, message: "Updated successful" });
    } catch (error) {
        next(error)
    }
}

controllers.deleteWebsite = async (req, res, next) => {
    try {
        const { id } = req.params;
        //check if id is not a number
        if (isNaN(id)) return createError.BadRequest("id is not a number")
        const del = await concelhoTuristico.destroy({
            where: { ws_id: id }
        })
        res.send({ success: true, deleted: del, message: "Deleted successful" });
    } catch (error) {
        next(error)
    }
}
module.exports = controllers;