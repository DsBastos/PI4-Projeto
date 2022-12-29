var tipoUtilizador = require('../models/tipoUtilizadorModel');

const controllers = {};
var sequelize = require("../models/database");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const createError = require('http-errors')

controllers.getAllTipoUtilizador = async (req, res, next) => {
    try {
        const data = await tipoUtilizador.findAll();
        res.send({ success: true, data: data });
    } catch (error) {
        next(error)
    }
};

// controllers.createTipoUtilizador = async (req, res, next) => {
//     const t = await sequelize.transaction();
//     try {
//         const tipoUtilizador = await tipoUtilizador.create(
//             {
//                 tipo: req.body.tu_tipo,
//             },
//             { transaction: t }
//         );
//         await t.commit();
//         res.send({ success: true, data: tipoUtilizador });
//     } catch (e) {
//         await t.rollback();
//         next(e);
//     }
// };

controllers.getTipoUtilizadorById = async (req, res, next) => {
    try {
        const {id} = req.params
        const data = await tipoUtilizador.findByPk(id)
        //check if id is not a number
        res.send({ success: true, data: data });
    } catch (error) {
        next(error)
    }
}

// controllers.updateTipoUtilizador = async (req, res, next) => {
//     try {
//         const { id } = req.params;
//         //check if id is not a number
//         if (isNaN(id)) return createError.BadRequest("id is not a number")

//         const {tipo} = req.body;
//         const data = await tipoUtilizador.update({
//             tu_tipo: tipo,
//         },
//             {
//                 where: { tu_id: id }
//             })
//         res.send({ success: true, data: data, message: "Updated successful" });
//     } catch (error) {
//         next(error)
//     }
// }

// controllers.deleteTipoUtilizador = async (req, res, next) => {
//     try {
//         const { id } = req.params;
//         //check if id is not a number
//         if (isNaN(id)) return createError.BadRequest("id is not a number")
//         const del = await tipoUtilizador.destroy({
//             where: { tu_id: id }
//         })
//         res.send({ success: true, deleted: del, message: "Deleted successful" });
//     } catch (error) {
//         next(error)
//     }
// }
module.exports = controllers;