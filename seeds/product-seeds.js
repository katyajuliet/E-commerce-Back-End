const { Product } = require('../models');

const productData = [
  {
    product_name: 'Necklace',
    price: 89.99,
    stock: 22,
    category_id: 1,
  },
  {
    product_name: 'Sandals',
    price: 60.0,
    stock: 45,
    category_id: 5,
  },
  {
    product_name: 'Sun Hat',
    price: 32.99,
    stock: 18,
    category_id: 4,
  },
  {
    product_name: 'Jean Jacket',
    price: 65.00,
    stock: 30,
    category_id: 3,
  },
  {
    product_name: 'Summer Tote',
    price: 29.99,
    stock: 12,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
