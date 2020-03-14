const express = require('express');
const router = express.Router();
const Car = require('../models/car');

router.get('/', (req, res) => {
  res.render('home');
});

router.get('/cars', (req, res) => {
  Car.find({}, (err, cars) => {
    if (err) {
      res.redirect('/');
    } else {
      res.render('cars', {
        cars
      });
    }
  })
})

router.get('/cars/new', (req, res) => {
  res.render('new');
})

router.post('/cars', (req, res) => {

  Car.create(req.body.car, (err, car) => {
    if (err) {
      res.redirect('/cars/new');
    } else {
      res.redirect('/cars');
    }
  })
});



module.exports = router;