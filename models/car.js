const mongoose = require('mongoose');

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
});

module.exports = mongoose.model('Car', CarSchema);