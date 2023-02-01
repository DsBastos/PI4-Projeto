var voucher = require('../models/voucherModel');
var cliente_voucher = require('../models/cliente_voucherModel')
const controllers = {};
var sequelize = require("../models/database");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const createError = require('http-errors')

controllers.getAllVoucher = async (req, res, next) => {
  try {
    const data = await voucher.findAll();
    res.send({ success: true, data: data });
  } catch (error) {
    next(error)
  }
};

controllers.createVoucher = async (req, res, next) => {
  const t = await sequelize.transaction();
  try {
    const voucher = await voucher.create(
      {
        dtinicio: req.body.v_dtinicio,
        dtfim: req.body.v_dtfim,
        pontos: req.body.v_pontos,
        emitidos: req.body.v_emitidos,
      },
      { transaction: t }
    );
    await t.commit();
    res.send({ success: true, data: voucher });
  } catch (e) {
    await t.rollback();
    next(e);
  }
};

controllers.getVoucherById = async (req, res, next) => {
  try {
    const { id } = req.params
    const data = await voucher.findByPk(id)
    //check if id is not a number
    res.send({ success: true, data: data });
  } catch (error) {
    next(error)
  }
}

controllers.getVoucherByUserId = async (req, res, next) => {
  try {
    const { id } = req.params
    const data = await voucher.findAll(
        { where: { c_id: id },
            include:[{model:cliente_voucher, 
                attributes:['c_disponibilidade']
            }] 
        }
    )
    res.send({ success: true, data: data });
  } catch (error) {
    next(error)
  }
}

controllers.updateVoucher = async (req, res, next) => {
  try {
    const { id } = req.params;
    //check if id is not a number
    if (isNaN(id)) return createError.BadRequest("id is not a number")

    const { dtinicio, dtfim, pontos, emitidos } = req.body;
    const data = await voucher.update({
      v_dtinicio: dtinicio,
      v_dtfim: dtfim,
      v_pontos: pontos,
      v_emitidos: emitidos,

    },
      {
        where: { v_id: id }
      })
    res.send({ success: true, data: data, message: "Updated successful" });
  } catch (error) {
    next(error)
  }
}

controllers.deleteVoucher = async (req, res, next) => {
  try {
    const { id } = req.params;
    //check if id is not a number
    if (isNaN(id)) return createError.BadRequest("id is not a number")
    const del = await voucher.destroy({
      where: { v_id: id }
    })
    res.send({ success: true, deleted: del, message: "Deleted successful" });
  } catch (error) {
    next(error)
  }
}
module.exports = controllers;