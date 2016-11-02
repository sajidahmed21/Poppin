
/* --- Dependencies / libraries / frameworks --- */
var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true} ));


// The main instance of our HTTP server
var server = require('http').Server(app);


// Modules specific to our project
var constants = require('./constants');
var user = require(constants.user);
var event = require(constants.event);


/* -------- User Sign Up and Authentication -------- */

app.post('/user/signup', user.handleSignUpRequest);


/* ------------------- Events ---------------------- */
app.post('/event/nearby-events', event.handleGetNearbyEventsRequest);

app.post('/event/details', event.handleEventDetailsRequest);

app.post('/event/create-event', event.createNewEvent);


/* ----------------- Communities ------------------ */

// TODO



/* ---------- Server Start up  -------------------- */

var hostname = 'localhost';
var port = 8080;

// Start listening for requests
server.listen(process.env.PORT || port, function () {
    console.log(`Server running at http://${hostname}:${port}/`);
});