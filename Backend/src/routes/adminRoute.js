const express =require('express');
const router =express.Router();
const adminController =require('../controllers/adminController')

router.get('/list', adminController.getAllAdmin);
router.get('/getadmin/:id', adminController.getAdminById);
router.post('/create', adminController.createAdmin);
router.put('/updateadmin/:id', adminController.updateAdmin);
router.delete('/deleteadmin/:id', adminController.deleteAdmin);
module.exports = router;