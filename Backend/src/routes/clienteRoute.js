const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController')

router.get('/list', clienteController.getAllCliente);
router.get('/getcliente/:id', clienteController.getClienteById);
router.post('/create', clienteController.createCliente);
router.post('/logincliente', clienteController.loginCliente);
router.put('/updatecliente/:id', clienteController.updateCliente);
router.delete('/deletecliente/:id', clienteController.deleteCliente);
module.exports = router;