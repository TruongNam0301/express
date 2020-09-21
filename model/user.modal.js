const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  age: String,
  username: String,
  password: String,
  avatar: String,
});

const User = mongoose.model('User', userSchema, 'users');

module.exports = User