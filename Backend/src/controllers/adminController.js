var admin = require('../models/adminModel');

const controllers = {};
var sequelize = require("../models/database");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const createError = require('http-errors')

controllers.getAllAdmin = async (req, res, next) => {
    try {
        const data = await admin.findAll();
        res.send({ success: true, data: data });
    } catch (error) {
        next(error)
    }
};

controllers.createAdmin = async (req, res, next) => {
    const t = await sequelize.transaction();
    try {
        const admin = await admin.create(
            {
                nome: req.body.adm_nome,
                email: req.body.adm_email,
                psw: req.body.adm_psw,
                
            },
            { transaction: t }
        );
        await t.commit();
        res.send({ success: true, data: admin });
    } catch (e) {
        await t.rollback();
        next(e);
    }
};

controllers.getAdminById = async (req, res, next) => {
    try {
        const {id} = req.params
        const data = await admin.findByPk(id)
        //check if id is not a number
        res.send({ success: true, data: data });
    } catch (error) {
        next(error)
    }
}

controllers.updateAdmin = async (req, res, next) => {
    try {
        const { id } = req.params;
        //check if id is not a number
        if (isNaN(id)) return createError.BadRequest("id is not a number")

        const {nome,email,psw } = req.body;
        const data = await cliente.update({
            nome: nome,
            psw:psw,
            email: email,
        },
            {
                where: { adm_id: id }
            })
        res.send({ success: true, data: data, message: "Updated successful" });
    } catch (error) {
        next(error)
    }
}

controllers.deleteAdmin = async (req, res, next) => {
    try {
        const { id } = req.params;
        //check if id is not a number
        if (isNaN(id)) return createError.BadRequest("id is not a number")
        const del = await admin.destroy({
            where: { adm_id: id }
        })
        res.send({ success: true, deleted: del, message: "Deleted successful" });
    } catch (error) {
        next(error)
    }
}
module.exports = controllers;