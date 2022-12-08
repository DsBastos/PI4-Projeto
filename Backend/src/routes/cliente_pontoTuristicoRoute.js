const express =require('express');
const router =express.Router();
const clienteController =require('../controllers/clienteController')

router.get('/list', clienteController.getAllCliente);
router.get('/getclientepontoturistico/:id', clienteController.getClienteById);
router.post('/create', clienteController.createCliente);
router.put('/updateclientepontoturistico/:id', clienteController.updateCliente);
router.delete('/deleteclientepontoturistico/:id', clienteController.deleteCliente);
module.exports = router;