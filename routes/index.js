const express = require('express');
const router = express.Router();
const Car = require('../models/car');
const isLoggedIn = require('../middleware/isloggedin');

// home page
router.get('/', (req, res) => {
  res.render('home');
});

// show all cars
router.get('/cars', isLoggedIn, (req, res) => {
  Car.find({}, (err, cars) => {
    if (err) {
      res.redirect('/');
    } else {
      res.render('cars', {
        cars
      });
    }
  });
})

// add new car
router.get('/cars/new', isLoggedIn, (req, res) => {
  res.render('new');
})

router.post('/cars', isLoggedIn, (req, res) => {

  Car.create(req.body.car, (err, car) => {
    if (err) {
      res.redirect('/cars/new');
    } else {
      res.redirect('/cars');
    }
  })
});

// edit designated car
router.get('/cars/:id/edit', isLoggedIn, (req, res) => {
  Car.findById(req.params.id, (err, foundCar) => {
    if (err) {
      res.redirect('/')
    } else {
      res.render('edit', {
        car: foundCar
      })
    }
  })
})

router.put('/cars/:id', isLoggedIn, (req, res) => {
  Car.findByIdAndUpdate(req.params.id, req.body.car, (err, updatedCar) => {
    if (err) {
      res.redirect('/');
    } else {
      res.redirect('/cars/' + req.params.id);
    }
  });
})

// delete designated car
router.get('/cars/:id/delete', isLoggedIn, (req, res) => {
  Car.findById(req.params.id, (err, foundCar) => {
    if (err) {
      res.redirect('/');
    } else {
      res.render('delete', {
        car: foundCar
      })
    }
  })
});

router.delete('/cars/:id', isLoggedIn, (req, res) => {
  Car.findByIdAndRemove(req.params.id, (err, removedCar) => {
    if (err) {
      res.redirect('/');
    } else {
      res.redirect('/cars');
    }
  })
});

// show designated car
router.get('/cars/:id', isLoggedIn, (req, res) => {
  Car.findById(req.params.id, (err, foundCar) => {
    if (err) {
      res.redirect('/');
    } else {
      res.render('show', {
        car: foundCar
      });
    }
  });
})

// router.use(function (req, res, next) {
//   res.locals.currentUser = req.user;
//   next();
// });


module.exports = router;