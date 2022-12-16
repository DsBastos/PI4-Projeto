const express = require("express");
var cors = require("cors");
const app = express();
const path = require("path");
require("dotenv").config();
require("./models/associations");
const createError = require("http-errors");
const { logger } = require("./middleware/logEvents");
const errorHandler = require("./middleware/errorHandler");

//const middleware = require('./middleware');

// const corsOptions = {
//   allowedHeaders: [
//     "Origin",
//     "X-Requested-With",
//     "Content-Type",
//     "Accept",
//     "X-Access-Token",
//     "Authorization",
//   ],
//   credentials: true,
//   origin: [
//     "http://localhost:3333/",
//     "http://localhost:8000/",
//     "http://localhost:8001/",
//   ],
// };

//Configurações
const whiteList = [
  "http://localhost:3333/",
  "http://localhost:8000/",
  "http://localhost:8001/",
];

const corsOptions = {
  origin: function (origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.set("port", process.env.PORT || 3333);
//Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//custom middleware logger
app.use(logger);

//serve static files
app.use("/", express.static(path.join(__dirname, "../public")));

//Routes

const autenticacaoRoute = require("./routes/authRoute.js");

const clienteRoute = require("./routes/clienteRoute.js");
const pontoTuristicoRoute = require("./routes/pontoTuristicoRoute.js");
const recompensaRoute = require("./routes/recompensaRoute.js");
const regiaoTuristicaRoute = require("./routes/regiaoTuristicaRoute.js");
const reservaRoute = require("./routes/reservaRoute.js");

const tipologiaRoute = require("./routes/tipologiaRoute.js");
const visitaRoute = require("./routes/visitaRoute.js");
const voucherRoute = require("./routes/voucherRoute.js");
const websiteRoute = require("./routes/websiteRoute.js");
const utilizadoresRoute = require("./routes/utilizadoresRoute.js");

app.use("/auth", autenticacaoRoute);

app.use("/utilizadores", utilizadoresRoute);
app.use("/cliente", clienteRoute);
app.use("/pontoTuristico", pontoTuristicoRoute);
app.use("/recompensa", recompensaRoute);
app.use("/regiaoTuristica", regiaoTuristicaRoute);
app.use("/reserva", reservaRoute);
app.use("/tipologia", tipologiaRoute);
app.use("/visita", visitaRoute);
app.use("/voucher", voucherRoute);
app.use("/website", websiteRoute);

app.all("*", (req, res, next) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ error: "404 Not found" });
  } else {
    res.type("txt").send("404 Not found");
  }
});

app.use(errorHandler);

app.listen(app.get("port"), () => {
  console.log("Start server on port " + app.get("port"));
});
