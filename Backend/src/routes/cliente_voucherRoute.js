const express =require('express');
const router =express.Router();
const clienteController =require('../controllers/clienteController')

router.get('/list', clienteController.getAllCliente);
router.get('/getclientevoucher/:id', clienteController.getClienteById);
router.post('/create', clienteController.createCliente);
router.put('/updateclientevoucher/:id', clienteController.updateCliente);
router.delete('/deleteclientevoucher/:id', clienteController.deleteCliente);
module.exports = router;