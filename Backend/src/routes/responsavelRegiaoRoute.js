const express =require('express');
const router =express.Router();
const responsavelRegiaoController =require('../controllers/responsavelRegiaoController')

router.get('/list', responsavelRegiaoController.getAllResponsavelRegiao);
router.get('/getresponsavelRegiao/:id', responsavelRegiaoController.getResponsavelRegiaoById);
router.post('/create', responsavelRegiaoController.createResponsavelRegiao);
router.put('/updateresponsavelRegiao/:id', responsavelRegiaoController.updateResponsavelRegiao);
router.delete('/deleteresponsavelRegiao/:id', responsavelRegiaoController.deleteResponsavelRegiao);
module.exports = router;