const express =require('express');
const router =express.Router();
const agenteTuristicoController =require('../controllers/agenteTuristicoController')

router.get('/list', agenteTuristicoController.getAllAgenteTuristico);
router.get('/getagenteturistico/:id', agenteTuristicoController.getAgenteTuristicoById);
router.post('/create', agenteTuristicoController.createAgenteTuristico);
router.put('/updateagenteturistico/:id', agenteTuristicoController.updateAgenteTuristico);
router.delete('/deleteagenteturistico/:id', agenteTuristicoController.deleteAgenteTuristico);
module.exports = router;