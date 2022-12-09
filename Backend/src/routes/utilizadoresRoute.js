const express =require('express');
const router =express.Router();
const utilizadorController =require('../controllers/utilizadorController')

router.get('/list', utilizadorController.getAllUtilizador);
router.get('/getutilizador/:id', utilizadorController.getUtilizadorById);
router.post('/create', utilizadorController.createUtilizador);
router.put('/updateutilizador/:id', utilizadorController.updateUtilizador);
router.delete('/deleteutilizador/:id', utilizadorController.deleteUtilizador);
module.exports = router;