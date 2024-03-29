var visita = require('../models/visitaModel');

const controllers = {};
var sequelize = require("../models/database");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const createError = require('http-errors');
const pontoTuristicos = require('../models/pontoTuristicoModel');
const { fn } = require("sequelize");

controllers.getAllVisita = async (req, res, next) => {
  try {
    const data = await visita.findAll({
      include: [{ model: pontoTuristicos, attributes: ['pt_nome', 'pt_regiao'] }]

    });
    res.send({ success: true, data: data });
  } catch (error) {
    next(error)
  }
};

controllers.getNextVisitaByPtId = async (req, res, next) => {
  try {
    const id = req.params.id
    const currentDate = fn("NOW");
    const data = await visita.findAll({
      where: {
        [Op.and]: [
          { vs_data: { [Op.gte]: currentDate } },
          { pt_id: id }]
      },
      order: [["vs_data", "ASC"]]
    });
    res.send({ success: true, data: data });
  } catch (error) {
    next(error)
  }
};

controllers.createVisita = async (req, res, next) => {
  const t = await sequelize.transaction();
  try {
    const visitas = await visita.create(
      {
        vs_data: req.body.vs_data,
        vs_horas: req.body.vs_horas,
        vs_vagas: req.body.vs_vagas,
        //pt_id: req.body.pt_id,
        pt_id: 1,
      },
      { transaction: t }
    );
    await t.commit();
    res.send({ success: true, data: visitas });
  } catch (e) {
    await t.rollback();
    next(e);
  }
};

controllers.getVisitaById = async (req, res, next) => {
  try {
    const { id } = req.params
    const data = await visita.findByPk(id,
      { include: [{ model: pontoTuristicos }] })
    //check if id is not a number
    res.send({ success: true, data: data });
  } catch (error) {
    next(error)
  }
}

controllers.updateVisita = async (req, res, next) => {
  try {
    const { id } = req.params;
    //check if id is not a number
    if (isNaN(id)) return createError.BadRequest("id is not a number")

    const { dataVisita, hora, vagas } = req.body;
    const data = await visita.update({
      vs_data: dataVisita,
      vs_horas: hora,
      vs_vagas: vagas,
    },
      {
        where: { vs_id: id }
      })
    res.send({ success: true, data: data, message: "Updated successful" });
  } catch (error) {
    next(error)
  }
}

controllers.deleteVisita = async (req, res, next) => {
  try {
    const { id } = req.params;
    //check if id is not a number
    if (isNaN(id)) return createError.BadRequest("id is not a number")
    const del = await visita.destroy({
      where: { vs_id: id }
    })
    res.send({ success: true, deleted: del, message: "Deleted successful" });
  } catch (error) {
    next(error)
  }
}
module.exports = controllers;