const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home');
});

router.get('/cars', (req, res) => {
  res.render('cars');
})

router.get('/cars/new', (req, res) => {
  res.render('new');
})

router.post('/cars', (req, res) => {
  console.log(req.body.car);

  res.send('You will add a new car');
});



module.exports = router;