const express =require('express');
const router =express.Router();
const regiaoTuristicaController =require('../controllers/regiaoTuristicaController')

router.get('/list', regiaoTuristicaController.getAllRegiaoTuristica);
router.get('/getregiaoturistica/:id', regiaoTuristicaController.getRegiaoTuristicaById);
router.post('/create', regiaoTuristicaController.createRegiaoTuristica);
router.put('/updateregiaoturistica/:id', regiaoTuristicaController.updateRegiaoTuristica);
router.delete('/deleteregiaoturistica/:id', regiaoTuristicaController.deleteRegiaoTuristica);
module.exports = router;