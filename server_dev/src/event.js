var constants = require("./constants");
var common = require(constants.common);
var dbAdapter = require(constants.dbAdapter);


/* Handler function for NearbyEvents requests.
 * This function is the first trigger point
 * whenever a NearbyEvents request is received.
*/
exports.handleGetNearbyEventsRequest = function (request, response) {
    
    var longitude = request.body.longitude;
    var latitude = request.body.latitude;
    
    dbAdapter.getListOfNearbyEvents(longitude, latitude, function (result, data) {
        
        if (result == constants.SUCCESS) {
            common.sendSuccessResponse(data, response);
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
exports.handleEventDetailsRequest = function (request, response) {
    
    var eventId = request.body.event_id;
    var name = request.body.name;
    var description = request.body.description;
    var startDate = request.body.start_date;
    var endDate = request.body.end_date;
    var longitude = request.body.longitude;
    var latitude = request.body.latitude;
    var isActive = request.body.is_active;
    var dateCreated = request.body.date_created;

    console.log("Event Id: " + eventId);
    console.log("Name: " + name);
    console.log("Description: " + description);
    console.log("Start Date: " + startDate);
    console.log("End Date: " + endDate);
    console.log("Longitude: " + longitude);
    console.log("Latitude: " + latitude);
    console.log("Active: " + isActive);
    console.log("Date Created: " + dateCreated);

    
    dbAdapter.getEventDetails(eventId, function (result, data) {
        
        if (result == constants.SUCCESS) {
            common.sendSuccessResponse(data, response);
        }
        else {
            var message = "Database error";
            common.sendErrorResponse(message, response);
        }
    });
};