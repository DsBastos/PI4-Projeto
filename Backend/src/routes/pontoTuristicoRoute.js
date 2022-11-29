const express =require('express');
const router =express.Router();
const pontoTuristicoController =require('../controllers/pontoTuristicoController')

router.get('/list', pontoTuristicoController.getAllPontoTuristico);
router.get('/getpontoturistico/:id', pontoTuristicoController.getPontoTuristicoById);
router.post('/create', pontoTuristicoController.createPontoTuristico);
router.put('/updatepontoturistico/:id', pontoTuristicoController.updatePontoTuristico);
router.delete('/deletepontoturistico/:id', pontoTuristicoController.deletePontoTuristico);
module.exports = router;