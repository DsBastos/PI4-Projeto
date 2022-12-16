var sequelize = require("../models/database");
const Sequelize = require("sequelize");
var utilizador = require("../models/utilizadoresModel");
const bcrypt = require("bcrypt");

const handleLogin = async (req, res) => {
  const { uemail, upwd } = req.body;
  if (!uemail || !upwd) {
    return res.status(400).json("Incorreta submissão de formulário");
  }
  const foundUser = await utilizador.findOne({ where: { u_email: uemail } });
  if (!foundUser) return res.status(401).json("Não autorizado");

  const isMatch = await bcrypt.compare(upwd, foundUser.u_pwd);
  if (isMatch) {
    // create  token JWTs
    return res.status(200).json({
      success: true,
      massage: `O utilzador ${foundUser.u_nome} está logado!`,
    });
  } else return res.status(401).json("Não autorizado");
};

module.exports = { handleLogin };
