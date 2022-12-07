const express =require('express');
const router =express.Router();
const clienteController =require('../controllers/clienteController')

router.get('/list', clienteController.getAllCliente);
router.get('/gettipologiapontoturistico/:id', clienteController.getClienteById);
router.post('/create', clienteController.createCliente);
router.put('/updatetipologiapontoturistico/:id', clienteController.updateCliente);
router.delete('/deletetipologiapontoturistico/:id', clienteController.deleteCliente);
module.exports = router;