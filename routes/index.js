const express = require('express');
const router = express.Router();
const Car = require('../models/car');

// home page
router.get('/', (req, res) => {
  res.render('home');
});

// show all cars
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

// add new car
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

// edit designated car
router.get('/cars/:id/edit', (req, res) => {
  Car.findById(req.params.id, (err, foundCar) => {
    if (err) {
      res.redirect('/cars')
    } else {
      res.render('edit', {
        car: foundCar
      })
    }
  })
})

router.put('/cars/:id', (req, res) => {
  Car.findByIdAndUpdate(req.params.id, req.body.car, (err, updatedCar) => {
    if (err) {
      res.redirect('/');
    } else {
      res.redirect('/cars');
    }
  });
})


module.exports = router;