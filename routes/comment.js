const express = require('express');
const router = express.Router();
const Car = require('../models/car');
const isLoggedIn = require('../middleware/isloggedin');

router.get('/cars/:id/comments/new', isLoggedIn, (req, res) => {
  res.render('comments/new', {
    carID: req.params.id
  });
});

router.put('/cars/:id/comments', isLoggedIn, (req, res) => {
  Car.findById(req.params.id, (err, car) => {
    if (err) {
      res.redirect('/');
    } else {
      car.comments.push(req.body.comment);
      car.save((err, comment) => {
        if (err) {
          res.redirect('/');
        } else {
          res.redirect('/cars/' + req.params.id);
        }
      })
    }
  })
});

module.exports = router;