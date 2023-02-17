const express = require('express');
const router = express.Router();
const cliente_voucherController = require('../controllers/cliente_voucherController')

//router.get('/list', cliente_voucherController.getAllCliente);
//router.get('/getclientevoucher/:id', cliente_voucherController.getClienteById);
router.get('/getvoucherbyuserid/:id', cliente_voucherController.getVoucherByUserId);
//router.post('/create', cliente_voucherController.createCliente);
//router.put('/updateclientevoucher/:id', cliente_voucherController.updateCliente);
//router.delete('/deleteclientevoucher/:id', cliente_voucherController.deleteCliente);
module.exports = router;