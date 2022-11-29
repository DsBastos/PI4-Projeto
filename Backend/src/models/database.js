var Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASECONNECTIONSTRING,{dialect:"postgres"});
sequelize.authenticate();
module.exports = sequelize;