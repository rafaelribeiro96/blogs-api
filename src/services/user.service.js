const jwt = require('jsonwebtoken');
const { User } = require('../models');

const Jwtsecret = process.env.JWT_SECRET;

const getUsers = async (email, password) => {
  const result = await User.findOne({ where: { email, password } });
  if (result) {
    const jwtConfig = { algorithm: 'HS256', expiresIn: '1d' };
    const token = jwt.sign({ data: { email } }, Jwtsecret, jwtConfig);
    return token;
  }
  return result;
};

module.exports = {
  getUsers,
};