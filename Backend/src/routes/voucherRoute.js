const express = require('express');
const router = express.Router();
const voucherController = require('../controllers/voucherController')

router.get('/list', voucherController.getAllVoucher);
router.get('/getvoucher/:id', voucherController.getVoucherById);
//router.get('/getvoucherbyuserid/:id', voucherController.getVoucherByUserId);
router.post('/create', voucherController.createVoucher);
router.put('/updatevoucher/:id', voucherController.updateVoucher);
router.delete('/deletevoucher/:id', voucherController.deleteVoucher);
module.exports = router;