const express =require('express');
const router =express.Router();
const recompensaController =require('../controllers/recompensaController')

router.get('/list', recompensaController.getAllRecompensa);
router.get('/getrecompensa/:id', recompensaController.getRecompensaById);
router.post('/create', recompensaController.createRecompensa);
router.put('/updaterecompensa/:id', recompensaController.updateRecompensa);
router.delete('/deleterecompensa/:id', recompensaController.deleteRecompensa);
module.exports = router;