var recompensa = require('../models/recompensaModel');
var pontoTuristico = require('../models/pontoTuristicoModel');
var regioesTuristicas = require('../models/regiaoTuristicaModel');
const controllers = {};
var sequelize = require("../models/database");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const createError = require('http-errors')

controllers.getAllRecompensa = async (req, res, next) => {
    try {
        const data = await recompensa.findAll({
            include:[{model:pontoTuristico, attributes:['pT_nome','pT_local']}]
        });
        res.send({ success: true, data: data });
    } catch (error) {
        next(error)
    }
};

controllers.createRecompensa = async (req, res, next) => {
    const t = await sequelize.transaction();
    try {
        const recompensa = await recompensa.create(
            {
                nome: req.body.r_nome,
                descricao: req.body.r_descricao,
                imagem: req.body.r_imagem,
                duracao: req.body.r_duracao,
            },
            { transaction: t }
        );
        await t.commit();
        res.send({ success: true, data: recompensa });
    } catch (e) {
        await t.rollback();
        next(e);
    }
};

controllers.getRecompensaById = async (req, res, next) => {
    try {
        const {id} = req.params
        const data = await recompensa.findByPk(id)
        //check if id is not a number
        res.send({ success: true, data: data });
    } catch (error) {
        next(error)
    }
}

controllers.updateRecompensa = async (req, res, next) => {
    try {
        const { id } = req.params;
        //check if id is not a number
        if (isNaN(id)) return createError.BadRequest("id is not a number")

        const {nome,descricao,imagem,duracao} = req.body;
        const data = await pontoTuristico.update({
            r_nome: nome,
            r_descricao:descricao,
            r_imagem: imagem,
            r_duracao:duracao,
        },
            {
                where: { r_id: id }
            })
        res.send({ success: true, data: data, message: "Updated successful" });
    } catch (error) {
        next(error)
    }
}

controllers.deleteRecompensa = async (req, res, next) => {
    try {
        const { id } = req.params;
        //check if id is not a number
        if (isNaN(id)) return createError.BadRequest("id is not a number")
        const del = await recompensa.destroy({
            where: { r_id: id }
        })
        res.send({ success: true, deleted: del, message: "Deleted successful" });
    } catch (error) {
        next(error)
    }
}
module.exports = controllers;