
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
var community = require(constants.communities);

/* -------- User Sign Up and Authentication -------- */

app.post('/user', user.signUp);

// app.post('/auth', ....) TODO


/* ------------------- Events ---------------------- */
app.get('/events', event.getEvents);

app.get('/event/:id', event.getEventDetails);

app.post('/event', event.createNewEvent);


/* ------------ User's Personal Events ------------ */

app.get('/myEvents', event.myEvents);

/* ----------------- Communities ------------------ */

app.get('/communities', community.getCommunities);

app.post('/communities', community.createNewCommunity);

/* ---------- Server Start up  -------------------- */

var hostname = 'localhost';
var port = 8080;

// Start listening for requests
server.listen(process.env.PORT || port, function () {
    console.log(`Server running at http://${hostname}:${port}/`);
});