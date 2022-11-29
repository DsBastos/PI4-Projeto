const express =require('express');
const router =express.Router();
const visitaController =require('../controllers/visitaController')

router.get('/list', visitaController.getAllVisita);
router.get('/getvisita/:id', visitaController.getVisitaById);
router.post('/create', visitaController.createVisita);
router.put('/updatevisita/:id', visitaController.updateVisita);
router.delete('/deletevisita/:id', visitaController.deleteVisita);
module.exports = router;