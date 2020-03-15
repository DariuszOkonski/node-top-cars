const mongoose = require('mongoose');
const Comment = require('./comment');

const CarSchema = new mongoose.Schema({
  brand: String,
  make: String,
  picture: {
    type: String,
    default: 'placeholder.jpg'
  },
  price: String,
  year: String,
  horsepower: String,
  maxspeed: String,
  description: String,
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
  }]
});

module.exports = mongoose.model('Car', CarSchema);