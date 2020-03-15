const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  author: String,
  body: String,
  created: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Comment', CommentSchema);