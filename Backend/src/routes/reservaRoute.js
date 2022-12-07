const express =require('express');
const router =express.Router();
const reservaController =require('../controllers/reservaController')

router.get('/list', reservaController.getAllReserva);
router.get('/getreserva/:id', reservaController.getReservaById);
router.post('/create', reservaController.createReserva);
router.put('/updatereserva/:id', reservaController.updateReserva);
router.delete('/deletereserva/:id', reservaController.deleteReserva);
module.exports = router;