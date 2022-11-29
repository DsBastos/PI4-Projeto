var pontoTuristico = require('../models/pontoTuristicoModel');

const controllers = {};
var sequelize = require("../models/database");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const createError = require('http-errors')

controllers.getAllPontoTuristico = async (req, res, next) => {
    try {
        const data = await pontoTuristico.findAll();
        res.send({ success: true, data: data });
    } catch (error) {
        next(error)
    }
};

controllers.createPontoTuristico = async (req, res, next) => {
    const t = await sequelize.transaction();
    try {
        const pontoTuristico = await pontoTuristico.create(
            {
                nome: req.body.pT_nome,
                local: req.body.pT_local,
                dificuldade: req.body.pT_dificuldade,
                duracao: req.body.pT_duracao,
                terreno: req.body.pT_terreno,
                tamanho: req.body.pT_tamanho,
                descricao: req.body.pT_descricao,
                horario: req.body.pT_horario,
                coordenadas: req.body.pT_coordenadas,
                link: req.body.pT_link,
                pontosadquiridos: req.body.pT_pontosadquiridos,
            },
            { transaction: t }
        );
        await t.commit();
        res.send({ success: true, data: pontoTuristico });
    } catch (e) {
        await t.rollback();
        next(e);
    }
};

controllers.getPontoTuristicoById = async (req, res, next) => {
    try {
        const {id} = req.params
        const data = await pontoTuristico.findByPk(id)
        //check if id is not a number
        res.send({ success: true, data: data });
    } catch (error) {
        next(error)
    }
}

controllers.updatePontoTuristico = async (req, res, next) => {
    try {
        const { id } = req.params;
        //check if id is not a number
        if (isNaN(id)) return createError.BadRequest("id is not a number")

        const {nome,local,dificuldade,duracao,terreno,tamanho,descricao,horario,coordenadas,link,pontosadquiridos} = req.body;
        const data = await pontoTuristico.update({
            pT_nome: nome,
            pT_local:local,
            pT_dificuldade: dificuldade,
            pT_duracao:duracao,
            pT_terreno: terreno,
            pT_tamanho:tamanho,
            pT_descricao: descricao,
            pT_horario:horario,
            pT_coordenadas: coordenadas,
            pT_link:link,
            pT_pontosadquiridos: pontosadquiridos,
        },
            {
                where: { pT_id: id }
            })
        res.send({ success: true, data: data, message: "Updated successful" });
    } catch (error) {
        next(error)
    }
}

controllers.deletePontoTuristico = async (req, res, next) => {
    try {
        const { id } = req.params;
        //check if id is not a number
        if (isNaN(id)) return createError.BadRequest("id is not a number")
        const del = await pontoTuristico.destroy({
            where: { pT_id: id }
        })
        res.send({ success: true, deleted: del, message: "Deleted successful" });
    } catch (error) {
        next(error)
    }
}
module.exports = controllers;