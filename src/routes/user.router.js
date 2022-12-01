const express = require('express');
const { createUser, getAll } = require('../controllers/user.controller');
const { validateUser, validateToken } = require('../middlewares');

const router = express.Router();

router.get('/', validateToken, getAll);
router.post('/', validateUser, createUser);

module.exports = router;