const { validateLogin } = require('./login.middlewares');
const { validateUser } = require('./user.middlewares');
const { validateToken } = require('./token.middlewares');

module.exports = {
  validateLogin,
  validateUser,
  validateToken,
};