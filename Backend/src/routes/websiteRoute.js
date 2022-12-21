const express =require('express');
const router =express.Router();
const websiteController =require('../controllers/websiteController')

router.get('/list', websiteController.getAllCamposWebsite);
router.get('/getwebsite/:id', websiteController.getCampoWebsiteById);
//router.post('/create', websiteController.createCampoWebsite);
router.put('/updatewebsite/:id', websiteController.updateCampoWebsite);
//router.delete('/deletewebsite/:id', websiteController.deleteCampoWebsite);
module.exports = router;