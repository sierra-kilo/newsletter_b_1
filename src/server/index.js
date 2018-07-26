const sslRedirect = require('heroku-ssl-redirect');
const express = require('express');
const app = express();


// middleware for production
app.use(express.static('dist'));



app.listen(8080, () => console.log('Listening on port 8080!'));
