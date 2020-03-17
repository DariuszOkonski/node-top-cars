const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const indexRoutes = require('./routes/index');
const commentsRoutes = require('./routes/comment');
const authorizationRoutes = require('./routes/authorization');

const passport = require('passport');
const LocalStrategy = require('passport-local');
const passportLocalMongoose = require('passport-local-mongoose');
const expressSession = require('express-session');
const User = require('./models/user');

mongoose.connect('mongodb://localhost/cars_app', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false
});

// Passport Configuration
app.use(expressSession({
  secret: 'This is a secret sentence whitch prepare salt',
  resave: false,
  saveUninitialized: false,
}));
passport.use(new LocalStrategy(User.authenticate()));
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Other Configuration
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(methodOverride("_method"));

// Usege of partials routes
app.use(indexRoutes);
app.use(commentsRoutes);
app.use(authorizationRoutes);

// listener ===========================================
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening at port ${port}...`);
})