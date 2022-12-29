var utilizador = require("../models/utilizadoresModel");

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const handleLogin = async (req, res) => {
  const { email, pwd } = req.body;
  if (!email || !pwd) {
    return res.status(400).json("Incorreta submissão de formulário");
  }
  const foundUser = await utilizador
    .findOne({ u_email: email } )
  if (!foundUser) return res.sendStatus(401);

  const isMatch = await bcrypt.compare(pwd, foundUser.u_pwd);
  if (isMatch) {
    const role = foundUser.tu_id;
    // create token JWTs
    const accessToken = jwt.sign(
      {
        UserInfo: {
          u_email: foundUser.u_email,
          roles: role,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1m" }
    );
    const refreshToken = jwt.sign(
      { email: foundUser.u_email },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "1d" }
    );

    // Saving refreshToken with current user
    foundUser.refreshToken = refreshToken;
    const result = await foundUser.save();
    console.log(result);
    console.log("role: ", role);

    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 24 * 60 * 60 * 1000,
    });

    // Send authorization roles and access token to user
    res.json({ role, accessToken });
  } else return res.sendStatus(401);
};

module.exports = { handleLogin };
