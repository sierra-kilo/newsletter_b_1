const sslRedirect = require('heroku-ssl-redirect');
const express = require('express');
const app = express();
const bodyParser = require('body-parser')

// middleware for production
app.use(express.static('dist'));

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Models
const db = require("./models");

// Sync Database
db.sequelize.sync().then(function() {
    console.log('Nice! Database looks fine')
}).catch(function(err) {
    console.log(err, "Something went wrong with the Database Update!")
});

// routes
require('./routes/api-routes.js')(app)

app.listen(8080, () => console.log('Listening on port 8080!'));
