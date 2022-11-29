const express =require('express');
const router =express.Router();
const tipologiaController =require('../controllers/tipologiaController')

router.get('/list', tipologiaController.getAllTipologia);
router.get('/gettipologia/:id', tipologiaController.getTipologiaById);
router.post('/create', tipologiaController.createTipologia);
router.put('/updatetipologia/:id', tipologiaController.updateTipologia);
router.delete('/deletetipologia/:id', tipologiaController.deleteTipologia);
module.exports = router;