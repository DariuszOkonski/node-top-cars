const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  author: String,
  body: String,
  created: {
    type: Date,
    default: Date.now
  }
})

const Comment = mongoose.model('Comment', CommentSchema);


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
  comments: [CommentSchema]
});

module.exports = mongoose.model('Car', CarSchema);