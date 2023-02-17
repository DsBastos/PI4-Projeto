var voucher = require('../models/voucherModel');
var clientevoucher = require('../models/cliente_voucherModel');
var cliente = require('../models/clienteModel');

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
  console.log(req.body)
  try {
    const voucherdata = await voucher.create(
      {
        v_dtinicio: req.body.v_dtinicio,
        v_dtfim: req.body.v_dtfim,
        r_id: req.body.r_id,
      },
      { transaction: t }
    );
    let createdVoucherId = voucherdata.dataValues.v_id;
    const clientevoucherdata = await clientevoucher.create(
      {
        c_id: req.body.c_id,
        v_id: createdVoucherId,
      },
      { transaction: t }
    );
    const clientedata = await cliente.update(
      { c_pontos: sequelize.literal('c_pontos - ' + req.body.r_pontos) },
      { where: { c_id: req.body.c_id } },
      { transaction: t }
    );

    await t.commit();
    res.send({ success: true, data: { voucherdata, clientevoucherdata, clientedata } });
  } catch (e) {
    console.log(e)
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