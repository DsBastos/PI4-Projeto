const express = require('express');
var cors = require('cors')
const app = express();
require('dotenv').config()
require('./models/associations')
const createError = require('http-errors');
//const middleware = require('./middleware');



const clienteRoute = require('./routes/clienteRoute.js')
const pontoTuristicoRoute = require('./routes/pontoTuristicoRoute.js')
const recompensaRoute = require('./routes/recompensaRoute.js')
const regiaoTuristicaRoute = require('./routes/regiaoTuristicaRoute.js')
const reservaRoute = require('./routes/reservaRoute.js')
const tipoutilizadoresRoute = require('./routes/tipoUtilizadorRoute.js')
const tipologiaRoute = require('./routes/tipologiaRoute.js')
const visitaRoute = require('./routes/visitaRoute.js')
const voucherRoute = require('./routes/voucherRoute.js')
const websiteRoute = require('./routes/websiteRoute.js');
const utilizadoresRoute = require('./routes/utilizadoresRoute.js');

//Configurações 
app.use(cors())
app.set('port', (process.env.PORT || 3333));
//Middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.json());

app.use('/utilizadores',utilizadoresRoute)
app.use('/tipoutilizadores',tipoutilizadoresRoute)
app.use('/cliente', clienteRoute)
app.use('/pontoturistico', pontoTuristicoRoute)
app.use('/recompensa', recompensaRoute)
app.use('/regiaoturistica', regiaoTuristicaRoute)
app.use('/reserva', reservaRoute)
app.use('/tipologia', tipologiaRoute);
app.use('/visita', visitaRoute)
app.use('/voucher', voucherRoute)
app.use('/website', websiteRoute);

app.use(async (req,res,next) => {
    next(createError.NotFound("Route does not exist!"))
})

app.use((err,req,res,next) =>{
    const status = err.status || 500;
    res.status(status).send({data:err.message,success: false})
})

app.listen(app.get('port'), () => {
    console.log("Start server on port " + app.get('port'))
})


