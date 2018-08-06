const sslRedirect = require('heroku-ssl-redirect');
const path = require('path');
const express = require('express');
require('dotenv').config()
const app = express();
const bodyParser = require('body-parser')
let PORT = process.env.PORT || 8080;

const publicPath = path.join(__dirname, '..', '..', 'dist');

// enable ssl redirect
app.use(sslRedirect());

// middleware for production
app.use(express.static('dist'));

//Models
const db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));



// Sync Database
db.sequelize.sync().then(function() {
    console.log('Nice! Database looks fine')
}).catch(function(err) {
    console.log(err, "Something went wrong with the Database Update!")
});

// routes
require('./routes/api-routes.js')(app)

app.get('*', (req, res) => {
  res.sendFile(path.join(dist, 'index.html'));
});

app.listen(PORT, () => console.log('Listening on port: ' + PORT));
