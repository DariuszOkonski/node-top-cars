const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const indexRoutes = require('./routes/index');
const commentsRoutes = require('./routes/comment');

mongoose.connect('mongodb://localhost/cars_app', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false
});

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(methodOverride("_method"));

app.use(indexRoutes);
app.use(commentsRoutes);

// listener ===========================================
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening at port ${port}...`);
})