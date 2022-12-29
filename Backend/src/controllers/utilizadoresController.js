var utilizador = require('../models/utilizadoresModel');
const controllers = {};
var sequelize = require("../models/database");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const createError = require('http-errors');
const reservas = require('../models/reservaModel');
const vouchers = require('../models/voucherModel');
const visitas = require('../models/visitaModel');
const recompensas = require('../models/recompensaModel');
const pontosTuristicos = require('../models/pontoTuristicoModel');
const clientes = require('../models/clienteModel');
const regioesTuristicas = require('../models/regiaoTuristicaModel');
const tipoutilizador = require('../models/tipoUtilizadorModel');

controllers.getAllUtilizador = async (req, res, next) => {
    try {
        const data = await utilizador.findAll({
            include: [{ model: tipoutilizador, attributes: ['tu_tipo'] }, { model: regioesTuristicas, attributes: ['rt_nome'] }]
        });
        res.send({ success: true, data: data });
    } catch (error) {
        next(error)
    }
};
controllers.createUtilizador = async (req, res, next) => {
    const t = await sequelize.transaction();
    try {
        //console.log(req.body)
        const util = await utilizador.create(
            {
                tu_id: req.body.cargo,
                u_nome: req.body.nome,
                u_email: req.body.email,
                u_pwd: req.body.password,
            },
            { transaction: t }
        );
        await t.commit();
        res.send({ success: true, data: util });
    } catch (e) {
        //console.log(e)
        await t.rollback();
        next(e);
    }
};

controllers.getUtilizadorById = async (req, res, next) => {
    try {
        const { id } = req.params
        const data = await utilizador.findByPk(id)
        //check if id is not a number
        res.send({ success: true, data: data });
    } catch (error) {
        next(error)
    }
}

controllers.updateUtilizador = async (req, res, next) => {
  try {
    const { id } = req.params;
    //check if id is not a number
    if (isNaN(id)) return createError.BadRequest("id is not a number");

        const { nome, email, pwd, tipo, rt_id } = req.body;
        const data = await utilizador.update({
            u_nome: nome,
            u_email: email,
            u_pwd: pwd,
            tu_id: tipo,
            rt_id: rt_id
        },
            {
                where: { u_id: id }
            })
        res.send({ success: true, data: data, message: "Updated successful" });
    } catch (error) {
        next(error)
    }
}

controllers.deleteUtilizador = async (req, res, next) => {
  try {
    const { id } = req.params;
    //check if id is not a number
    if (isNaN(id)) return createError.BadRequest("id is not a number");
    const del = await utilizador.destroy({
      where: { u_id: id },
    });
    res.send({ success: true, deleted: del, message: "Deleted successful" });
  } catch (error) {
    next(error);
  }
};

//Funções de count
//Devia estar uma função apenas a retornar um count, mas assim vai facilitar-nos o trabalho no frontend

controllers.getCountDashboardAdmin = async (req, res, next) => {
    try {
        const countUtilizadores = await utilizador.count({

        });
        const countRT = await utilizador.count({
            where: {
                tu_id: 2
            }
        });
        const countRegioesTuristicas = await regioesTuristicas.count({

        });
        const countAT = await utilizador.count({
            where: {
                tu_id: 3
            }
        });
        const countPontoTuristico = await pontosTuristicos.count({

        });
        const countReservas = await reservas.count({

        });
        const countVouchers = await vouchers.count({

controllers.getCountDashboardRT = async (req, res, next) => {
  try {
    const countAT = await utilizador.count({
      where: {
        tu_id: 3,
      },
    });
    const countPontoTuristico = await reservas.count({});
    const countVisitas = await visitas.count({});
    const countClientes = await clientes.count({});
    const countVouchers = await vouchers.count({});
    res.send({
      success: true,
      data: [
        countAT,
        countPontoTuristico,
        countVisitas,
        countClientes,
        countVouchers,
      ],
    });
  } catch (error) {
    next(error);
  }
};

        });
        res.send({ success: true, data: [countUtilizadores, countRT, countRegioesTuristicas, countAT, countPontoTuristico, countReservas, countVouchers, countClientes] });
    } catch (error) {
        next(error)
    }
}

controllers.getCountDashboardRT = async (req, res, next) => {
    try {
        const countAT = await utilizador.count({
            where: {
                tu_id: 3
            }
        });
        const countPontoTuristico = await reservas.count({

        });
        const countVisitas = await visitas.count({

        });
        const countClientes = await clientes.count({

        });
        const countVouchers = await vouchers.count({

        });
        res.send({ success: true, data: [countAT, countPontoTuristico, countVisitas, countClientes, countVouchers] });
    } catch (error) {
        next(error)
    }
}

controllers.getCountDashboardAT = async (req, res, next) => {
    try {
        const countVisitas = await visitas.count({

        });
        const countClientes = await clientes.count({

        });
        const countReservas = await reservas.count({

        });
        res.send({ success: true, data: [countVisitas, countClientes, countReservas] });
    } catch (error) {
        next(error)
    }
}

module.exports = controllers;
