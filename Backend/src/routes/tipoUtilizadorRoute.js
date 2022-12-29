const express =require('express');
const router =express.Router();
const tipoUtilizadorController =require('../controllers/tipoUtilizadorController')

router.get('/list', tipoUtilizadorController.getAllTipoUtilizador);
router.get('/gettipoutilizador/:id', tipoUtilizadorController.getTipoUtilizadorById);
//router.post('/create', tipoUtilizadorController.createTipoUtilizador);
//router.put('/updatetipoutilizador/:id', tipoUtilizadorController.updateTipoUtilizador);
//router.delete('/deletetipoutilizador/:id', tipoUtilizadorController.deleteTipoUtilizador);
module.exports = router;