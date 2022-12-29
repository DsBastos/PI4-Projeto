const express =require('express');
const router =express.Router();
const utilizadoresController =require('../controllers/utilizadoresController')

router.get('/list', utilizadoresController.getAllUtilizador);
router.get('/getutilizador/:id', utilizadoresController.getUtilizadorById);
router.post('/create', utilizadoresController.createUtilizador);
router.patch('/updateutilizador/:id', utilizadoresController.updateUtilizador);
router.delete('/deleteutilizador/:id', utilizadoresController.deleteUtilizador);
router.get('/countdashboardadmin', utilizadoresController.getCountDashboardAdmin)
router.get('/countdashboardrt', utilizadoresController.getCountDashboardRT)
router.get('/countdashboardat', utilizadoresController.getCountDashboardAT)
module.exports = router;