const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  price: String,
  description: String,
  image: String,
});

const Product = mongoose.model('Product', productSchema, 'products');

module.exports = Product ;