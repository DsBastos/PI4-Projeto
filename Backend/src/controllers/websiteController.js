var website = require('../models/websiteModel');

const controllers = {};
var sequelize = require("../models/database");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const createError = require('http-errors')

controllers.getAllCamposWebsite = async (req, res, next) => {
    try {
        const data = await website.findAll();
        res.send({ success: true, data: data });
    } catch (error) {
        next(error)
    }
};

controllers.createCampoWebsite = async (req, res, next) => {
    const t = await sequelize.transaction();
    try {
        const website = await website.create(
            {
                nome: req.body.ws_nome,
                texto: req.body.ws_texto,
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

controllers.getCampoWebsiteById = async (req, res, next) => {
    try {
        const {id} = req.params
        const data = await website.findByPk(id)
        //check if id is not a number
        res.send({ success: true, data: data });
    } catch (error) {
        next(error)
    }
}

controllers.updateCampoWebsite = async (req, res, next) => {
    try {
        const { id } = req.params;
        //check if id is not a number
        if (isNaN(id)) return createError.BadRequest("id is not a number")

        const {nome,texto} = req.body;
        const data = await website.update({
            ws_nome: nome,
            ws_texto: texto,
        },
            {
                where: { ws_id: id }
            })
        res.send({ success: true, data: data, message: "Updated successful" });
    } catch (error) {
        next(error)
    }
}

// controllers.deleteCampoWebsite = async (req, res, next) => {
//     try {
//         const { id } = req.params;
//         //check if id is not a number
//         if (isNaN(id)) return createError.BadRequest("id is not a number")
//         const del = await website.destroy({
//             where: { ws_id: id }
//         })
//         res.send({ success: true, deleted: del, message: "Deleted successful" });
//     } catch (error) {
//         next(error)
//     }
// }
 module.exports = controllers;