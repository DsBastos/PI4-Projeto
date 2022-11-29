const express =require('express');
const router =express.Router();
const websiteController =require('../controllers/websiteController')

router.get('/list', websiteController.getAllWebsite);
router.get('/getwebsite/:id', websiteController.getWebsiteById);
router.post('/create', websiteController.createWebsite);
router.put('/updatewebsite/:id', websiteController.updateWebsite);
router.delete('/deletewebsite/:id', websiteController.deleteWebsite);
module.exports = router;