const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Jewelry',
  },
  {
    category_name: 'Outerwear',
  },
  {
    category_name: 'Handbags',
  },
  {
    category_name: 'Hats',
  },
  {
    category_name: 'Shoes',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
