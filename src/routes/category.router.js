const express = require('express');
const { createCategory, getAllCategories } = require('../controllers/category.controller');
const { validateCategory, validateToken } = require('../middlewares');

const router = express.Router();

router.get('/', validateToken, getAllCategories);
router.post('/', validateToken, validateCategory, createCategory);

module.exports = router;