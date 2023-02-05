require('dotenv').config()
const express = require('express')
var cors = require('cors')
const app = express()
const path = require('path')
require('./models/associations')
const createError = require('http-errors')
const verifyJWT = require('./middleware/verifyJWT')
const cookieParser = require('cookie-parser')

// Handle options credentials check - before CORS!
// and fetch cookies credentials requirement

app.use(cors({ credentials: true, origin: true }))

app.set('port', process.env.PORT || 3333)
//Middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(cookieParser())

//serve static files
app.use('/', express.static(path.join(__dirname, '../public')))

//Routes

const autenticacaoRoute = require('./routes/authRoute.js')
const refreshRoute = require('./routes/refreshRoute.js')
const logoutRoute = require('./routes/logoutRoute.js')

const clienteRoute = require('./routes/clienteRoute.js')
const pontoTuristicoRoute = require('./routes/pontoTuristicoRoute.js')
const recompensaRoute = require('./routes/recompensaRoute.js')
const regiaoTuristicaRoute = require('./routes/regiaoTuristicaRoute.js')
const reservaRoute = require('./routes/reservaRoute.js')
const tipoutilizadoresRoute = require('./routes/tipoUtilizadorRoute.js')
const tipologiaRoute = require('./routes/tipologiaRoute.js')
const visitaRoute = require('./routes/visitaRoute.js')
const voucherRoute = require('./routes/voucherRoute.js')
const websiteRoute = require('./routes/websiteRoute.js')
const utilizadoresRoute = require('./routes/utilizadoresRoute.js')

app.use('/auth', autenticacaoRoute)
app.use('/refresh', refreshRoute)
app.use('/logout', logoutRoute)
app.use('/website', websiteRoute)

app.use(verifyJWT)
app.use('/utilizadores', utilizadoresRoute)
app.use('/tipoutilizadores', tipoutilizadoresRoute)
app.use('/cliente', clienteRoute)
app.use('/pontoturistico', pontoTuristicoRoute)
app.use('/recompensa', recompensaRoute)
app.use('/regiaoturistica', regiaoTuristicaRoute)
app.use('/reserva', reservaRoute)
app.use('/tipologia', tipologiaRoute)
app.use('/visita', visitaRoute)
app.use('/voucher', voucherRoute)

app.all('*', (req, res, next) => {
  res.status(404)
  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname, 'views', '404.html'))
  } else if (req.accepts('json')) {
    res.json({ error: '404 Not found' })
  } else {
    res.type('txt').send('404 Not found')
  }
})

app.use(createError)

app.listen(app.get('port'), () => {
  console.log('Start server on port ' + app.get('port'))
})
