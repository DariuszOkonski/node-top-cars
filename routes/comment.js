const express = require('express');
const router = express.Router();
const Car = require('../models/car');
// const Comment = require('../models/comment');
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

// router.use(function (req, res, next) {
//   res.locals.currentUser = req.user;
//   next();
// });

module.exports = router;