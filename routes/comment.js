const express = require('express');
const router = express.Router();
const Car = require('../models/car');
const Comment = require('../models/comment');

router.get('/cars/:id/comments/new', (req, res) => {
  res.render('comments/new', {
    carID: req.params.id
  });
});

router.put('/cars/:id/comments', (req, res) => {
  Car.findById(req.params.id, (err, car) => {
    if (err) {
      res.redirect('/');
    } else {
      Comment.create(req.body.comment, (err, comment) => {
        if (err) {
          res.redirect('/');
        } else {
          car.comments.push(comment);
          car.save((err, data) => {
            if (err) {
              res.redirect('/');
            } else {
              res.redirect('/cars/' + req.params.id);
            }
          })
        }
      })
    }
  })
});

module.exports = router;