const jwt = require('jsonwebtoken');
const { User } = require('../models');

const { JWT_SECRET } = process.env || 'teste';
const jwtConfig = { algorithm: 'HS256', expiresIn: '1d' };

const Token = (result) => {
  const { password: _, ...dataValues } = result.dataValues;
  const token = jwt.sign({ dataValues }, JWT_SECRET, jwtConfig);
  return token;
};

const getUsers = async (email, password) => {
  const result = await User.findOne({ where: { email, password } });
  if (result) { return Token(result); }
  return result;
};

const getAll = async () => {
  const result = await User.findAll();
  return result.map(({ dataValues }) => {
    console.log('map getAll', dataValues);
    const { password: _, ...newUser } = dataValues;
    return newUser;
  });
};

const getUserByEmail = async (findEmail) => {
  const result = await User.findAll();
  return result.find(({ email }) => email === findEmail);
};

const createUser = async (user) => {
  const verify = await getUserByEmail(user.email);
  if (verify) { return null; }
  const result = await User.create(user);
  return Token(result);
};

module.exports = {
  getUsers,
  getAll,
  createUser,
};