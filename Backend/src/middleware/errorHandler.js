const {logEvents} = require("./logEvents");

// Error handler middleware
const errorHandler = (err, req, res, next) => {
  logEvents(`${err.name}\t${err.message}\t${err.stack}`, "errorLog.txt")
  console.error(err.stack)
  res.status(500).send(err.stack);
}

module.exports = errorHandler;