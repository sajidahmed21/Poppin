var constants = require("./constants");
var common = require(constants.common);
var dbAdapter = require(constants.dbAdapter);


/* Handler function for NearbyEvents requests.
 * This function is the first trigger point
 * whenever a NearbyEvents request is received.
*/
exports.getEvents = function (request, response) {

    var radius = parseInt(request.query.radius);
    var longitude = parseFloat(parseFloat(request.query.longitude).toFixed(6));
    var latitude = parseFloat(parseFloat(request.query.latitude).toFixed(6));

    dbAdapter.getListOfNearbyEvents(longitude, latitude, radius, function (result, data) {

        if (result === constants.SUCCESS) {
            var today = new Date()/1000;

            //Format to readable data in sending response
            var formattedData = {};
            for (var i = 0; i < data.length; i++) {
                var eventID = data[i].id;
                formattedData[eventID] = data[i];
            }

            common.sendSuccessResponse(formattedData, response);
        }
        else {
            var message = "Database error";
            common.sendErrorResponse(message, response);
        }
    });
};


/* Handler function for EventDetails requests.
 * This function is the first trigger point
 * whenever an EventDetails request is received.
*/
exports.getEventDetails = function (request, response) {

    var eventId = request.params.id;
    console.log("Event Id: " + eventId);

    dbAdapter.getEventDetails(eventId, function (result, data) {
        console.log(data);
        if (result === constants.SUCCESS) {
            common.sendSuccessResponse(data[0], response);
        }
        else {
            var message = "Database error";
            common.sendErrorResponse(message, response);
        }
    });
};

/* Creates a new event
 */
exports.createNewEvent = function (request, response){
    var name = request.body.name;
    var description = request.body.description;
    var startDate = request.body.start_date;
    var endDate = request.body.end_date;
    var longitude = request.body.longitude;
    var latitude = request.body.latitude;

    var event = {
        name: name,
        description: description,
        startDate: startDate,
        endDate: endDate,
        longitude: longitude,
        latitude: latitude
    };

    dbAdapter.createNewEvent(event, function(result){
        if (result === constants.SUCCESS) {
            common.sendSuccessResponse(result, response);
        }
        else {
            var message = "Database error";
            common.sendErrorResponse(message, response);
        }
    });
};


exports.myEvents = function (request, response) {
    
    dbAdapter.getEventsForUser(request.userId, function(result, data) {
        if (result === constants.SUCCESS) {
            common.sendSuccessResponse(data, response);
        }
        else {
            var message = "Database error";
            common.sendErrorResponse(message, response);
        }
    });
};

exports.updateIntention = function(request, response){
    var eId = parseInt(request.body.eventId);
    var userId = parseInt(request.body.userId);
    var interested = 0;
    var attending = 0;

    if (request.body.hasOwnProperty('interested')){
        interested = 1;
    }

    if (request.body.hasOwnProperty('attending')){
        attending = 1;
    }

    if (!request.body.hasOwnProperty('attending') && request.body.hasOwnProperty('interested')){
        var message = "Intention not given";
        common.sendErrorResponse(message, response);
    } else {
        dbAdapter.putUserIntention(eId, userId, interested, attending, function(result){
             if (result === constants.SUCCESS) {
                common.sendSuccessResponse(result, response);
            }
            else {
                var message = "Database error";
                common.sendErrorResponse(message, response);
            }
        });
    }
};

exports.removeIntention = function(request, response){
    var eId = parseInt(request.body.eventId);
    var userId = parseInt(request.body.userId);
    var notInterested = 0;
    var notAttending = 0;

    //If notinterested/notattending flag is in the body, set their relevant attribute to 0 in db.
    if (request.body.hasOwnProperty('interested')){
        notInterested = 1;
    }

    if (request.body.hasOwnProperty('attending')){
        notAttending = 1;
    }

    if (!request.body.hasOwnProperty('attending') && !request.body.hasOwnProperty('interested')){
        var message = "Intention not given";
        common.sendErrorResponse(message, response);
    } else {
        dbAdapter.removeUserIntention(eId, userId, notInterested, notAttending, function(result){
             if (result === constants.SUCCESS) {
                common.sendSuccessResponse(result, response);
            }
            else {
                console.log(result);
                var message = "Database error";
                common.sendErrorResponse(message, response);
            }
        });
    }
};