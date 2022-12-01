const express = require('express');
const { createUser, getAllUser, getUserById } = require('../controllers/user.controller');
const { validateUser, validateToken } = require('../middlewares');

const router = express.Router();

router.get('/', validateToken, getAllUser);
router.get('/:id', validateToken, getUserById);
router.post('/', validateUser, createUser);

module.exports = router;