const express = require('express');
const { createCategory } = require('../controllers/category.controller');
const { validateCategory, validateToken } = require('../middlewares');

const router = express.Router();

router.post('/', validateToken, validateCategory, createCategory);

module.exports = router;