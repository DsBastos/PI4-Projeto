var Cliente = require('../models/clienteModel');

const controllers = {};
var sequelize = require("../models/database");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const createError = require('http-errors')

controllers.getAllCliente = async (req, res, next) => {
  try {
    const data = await Cliente.findAll();
    res.send({ success: true, data: data });
  } catch (error) {
    next(error)
  }
};

controllers.createCliente = async (req, res, next) => {
  const t = await sequelize.transaction();
  try {
    const cliente = await Cliente.create(
      {
        nome: req.body.c_nome,
        idade: req.body.c_idade,
        email: req.body.c_email,
        pwd: req.body.c_pwd,
        regiao: req.body.c_regiao,
        estrangeiro: req.body.c_estrangeiro,
        pontos: req.body.c_pontos,
      },
      { transaction: t }
    );
    await t.commit();
    res.send({ success: true, data: cliente });
  } catch (e) {
    await t.rollback();
    next(e);
  }
};

controllers.loginCliente = async (req, res, next) => {
  try {
    const cliente = await Cliente.findOne({where:{
        c_email: req.body.c_email,
        c_pwd: req.body.c_pwd,
      }});
    res.send({ success: true, data: cliente });
  } catch (e) {
    console.log(e)
    next(e);
  }
};

controllers.getClienteById = async (req, res, next) => {
  try {
    const { id } = req.params
    const data = await Cliente.findByPk(id)
    //check if id is not a number
    res.send({ success: true, data: data });
  } catch (error) {
    next(error)
  }
}

controllers.updateCliente = async (req, res, next) => {
  try {
    const { id } = req.params;
    //check if id is not a number
    if (isNaN(id)) return createError.BadRequest("id is not a number")

    const { nome, idade, email, pwd, regiao, estrangeiro, pontos } = req.body;
    const data = await Cliente.update({
      c_nome: nome,
      c_idade: idade,
      c_email: email,
      c_pwd: pwd,
      c_regiao: regiao,
      c_estrangeiro: estrangeiro,
      c_pontos: pontos,
    },
      {
        where: { c_id: id }
      })
    res.send({ success: true, data: data, message: "Updated successful" });
  } catch (error) {
    next(error)
  }
}

controllers.deleteCliente = async (req, res, next) => {
  try {
    const { id } = req.params;
    //check if id is not a number
    if (isNaN(id)) return createError.BadRequest("id is not a number")
    const del = await Cliente.destroy({
      where: { c_id: id }
    })
    res.send({ success: true, deleted: del, message: "Deleted successful" });
  } catch (error) {
    next(error)
  }
}
module.exports = controllers;