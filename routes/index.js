const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home');
});

router.get('/cars', (req, res) => {
  res.render('cars');
})



module.exports = router;