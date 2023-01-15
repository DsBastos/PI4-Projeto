var sequelize = require("../models/database");
const Sequelize = require("sequelize");
var utilizador = require("../models/utilizadoresModel");

const jwt = require("jsonwebtoken");
require("dotenv").config();

const handleRefreshToken = async (req, res) => {
  const cookies = req.cookies;

  if (!cookies?.jwt) return res.sendStatus(401); //unauthorized (no token found)

  console.log(cookies.jwt);
  const refreshToken = cookies.jwt;

  const foundUser = await utilizador.findOne({ refreshToken });
  if (!foundUser) return res.status(403); //forbidden

  // evaluate JWTs
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
    if (err || foundUser.u_email !== decoded.u_email) return res.status(403);
    const role = Object.values(foundUser.tu_id);
    const accessToken = jwt.sign(
      {
        UserInfo: {
          u_email: decoded.u_email,
          roles: role,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "15m" }
    );
    res.json({role, accessToken });
  });
};

module.exports = { handleRefreshToken };
