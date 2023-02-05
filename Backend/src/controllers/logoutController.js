const utilizadores = require('../models/utilizadoresModel')
const { Op } = require('sequelize')

const handleLogout = async (req, res) => {
  // On client, also delete the accessToken

  const cookies = req.cookies
  if (!cookies?.jwt) return res.sendStatus(204) //No content
  const refreshToken = cookies.jwt

  // Is refreshToken in db?
  const foundUser = await utilizadores.findOne({ where: { refreshToken } })
  //console.log(foundUser)
  if (!foundUser) {
    res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true })
    return res.sendStatus(204)
  }

  console.log('foundUser refreshToken: ', foundUser.refreshToken)

  // Delete refreshToken in db (does not work) ⬇️
  // foundUser.refreshToken = utilizadores.findOne({
  //   where: {
  //     refreshToken: {
  //       [Op.ne]: refreshToken,
  //     },
  //   },
  // })
  // const result = await foundUser.save()
  // console.log(result)

  res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true })
  res.sendStatus(204)
}

module.exports = { handleLogout }
