// server.js
const express = require('express');
const app = express();
const path = require('path');
const compression = require('compression');
const appRoutes = require('./routes/app');


app.use(compression());

// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));
// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);


app.use('/', appRoutes);


app.use(function(req, res, next) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

