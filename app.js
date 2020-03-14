const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const indexRoutes = require('./routes/index');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(indexRoutes);

// listener ===========================================
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening at port ${port}...`);
})