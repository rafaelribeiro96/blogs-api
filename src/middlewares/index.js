const { validateLogin } = require('./login.middlewares');
const { validateUser } = require('./user.middlewares');
const { validateToken } = require('./token.middlewares');
const { validateCategory } = require('./category.middlewares');

module.exports = {
  validateLogin,
  validateUser,
  validateToken,
  validateCategory,
};