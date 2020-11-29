const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  price: String,
  description: String,
  image: String,
  LoaiMA: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'LoaiMA'
    }
});

const MonAn = mongoose.model('Product', productSchema, 'MonAn');

module.exports = MonAn ;