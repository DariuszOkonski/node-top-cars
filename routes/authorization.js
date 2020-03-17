const express = require('express');
const router = express.Router({
  mergeParams: true
});
const passport = require('passport');
const User = require('../models/user');

// show sign up form
router.get('/register', (req, res) => {
  res.render('register');
});

router.post('/register', (req, res) => {
  User.register(new User({
    username: req.body.username
  }), req.body.password, (err, user) => {
    if (err) {
      console.log(err);
      res.render('register');
    }
    passport.authenticate('local')(req, res, () => {
      res.redirect('/cars');
    });
  });
})

module.exports = router;