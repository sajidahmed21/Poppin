
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
var common = require(constants.common);
var dbAdapter = require(constants.dbAdapter);
var user = require(constants.user);
var event = require(constants.event);
var community = require(constants.communities);

/* -------- User Sign Up and Authentication -------- */

var requireAuth = function (req, res, next) {
  var authHeader = (req.get('Authorization') || "").trim().split(" ");
  var token = authHeader[1] || false;
  if (token === false) {
    common.sendErrorResponse("Not authorized 005.", res);
  } else {
    dbAdapter.getUserByToken(token, function(result, data){
      if (result === constants.SUCCESS) {
        req.authenticated = data;
        next();
      } else {
        common.sendErrorResponse("Not authorized 004.", res);
      }
    });
  }
};

app.post('/user', user.signUp);

app.post('/authorize', user.authorize);

/* ------------------- Events ---------------------- */
app.get('/events', requireAuth, event.getEvents);

app.get('/event/:id', requireAuth, event.getEventDetails);

app.post('/event', requireAuth, event.createNewEvent);

//Intentions for events
app.put('/event/updateIntention', requireAuth, event.updateIntention);
app.delete('/event/removeIntention', requireAuth, event.removeIntention);

/* ------------ User's Personal Events ------------ */

app.get('/myEvents', requireAuth, event.myEvents);

/* ----------------- Communities ------------------ */

app.get('/communities', requireAuth, community.getCommunities);

app.post('/communities', requireAuth, community.createNewCommunity);

/* ---------- Server Start up  -------------------- */

var hostname = 'localhost';
var port = 8080;

// Start listening for requests
server.listen(process.env.PORT || port, function () {
    console.log(`Server running at http://${hostname}:${port}/`);
});
