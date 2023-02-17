var reserva = require('../models/reservaModel');
const clientes = require('../models/clienteModel');
const visita = require('../models/visitaModel');
const pontoTuristico = require('../models/pontoTuristicoModel')
const controllers = {};
var sequelize = require("../models/database");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const createError = require('http-errors');

controllers.getAllReserva = async (req, res, next) => {
  try {
    /*const data = await reserva.findAll({
        include:[{ all: true, nested: true }]
    });*/

    const data = await reserva.findAll({
      include: [{
        model: visita,
        include: [{
          model: pontoTuristico
        }]
      }, {
        model: clientes,
      }]
    })

    res.send({ success: true, data: data });
  } catch (error) {
    next(error)
  }
};

controllers.createReserva = async (req, res, next) => {
  const t = await sequelize.transaction();
  try {
    console.log(req.body)
    const data = await reserva.create(
      {
        c_id: req.body.c_id,
        vs_id: req.body.vs_id,
        rs_npessoas: req.body.rs_nPessoas,
      },
      { transaction: t }
    );
    await t.commit();
    res.send({ success: true, data: data });
  } catch (e) {
    console.log(e)
    await t.rollback();
    next(e);
  }
};

controllers.getReservaById = async (req, res, next) => {
  try {
    const { id } = req.params
    const data = await reserva.findByPk(id)
    res.send({ success: true, data: data });
  } catch (error) {
    next(error)
  }
}

controllers.getReservaByUserId = async (req, res, next) => {
  try {
    const { id } = req.params
    const data = await reserva.findAll(
      { where: { c_id: id }, include: [{ model: visita, include: [{ model: pontoTuristico }] }] })
    res.send({ success: true, data: data });
  } catch (error) {
    next(error)
  }
}

controllers.updateReserva = async (req, res, next) => {
  try {
    const { id } = req.params;
    //check if id is not a number
    if (isNaN(id)) return createError.BadRequest("id is not a number")
    let { aceite } = req.body;
    let estado = '';
    if (aceite == 'Cancelado') {
      estado = 'Cancelado pelo cliente'
      aceite = 'False'
    }
    else {
      estado = aceite == true ? 'Aceite' : 'Rejeitado'
    }
    console.log(aceite)
    console.log(estado)
    const data = await reserva.update({
      r_aceite: aceite,
      rs_estado: estado
    },
      {
        where: { rs_id: id }
      })
    res.send({ success: true, data: data, message: "Updated successful" });
  } catch (error) {
    console.log(error)
    next(error)
  }
}

controllers.deleteReserva = async (req, res, next) => {
  try {
    const { id } = req.params;
    //check if id is not a number
    if (isNaN(id)) return createError.BadRequest("id is not a number")
    const del = await reserva.destroy({
      where: { rs_id: id }
    })
    res.send({ success: true, deleted: del, message: "Deleted successful" });
  } catch (error) {
    next(error)
  }
}
module.exports = controllers;