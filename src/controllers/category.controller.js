const categoryService = require('../services/category.service');

const createCategory = async (req, res) => {
  const category = await categoryService.createCategory(req.body);
  if (category) { return res.status(201).json(category); }
  res.status(409).json({ message: 'Category already registered' });
};

module.exports = {
  createCategory,
};