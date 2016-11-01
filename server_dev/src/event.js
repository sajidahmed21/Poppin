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
            common.sendErrorReponse(message, response);
        }
    });
};


/* Handler function for EventDetails requests.
 * This function is the first trigger point
 * whenever an EventDetails request is received.
*/
exports.handleEventDetailsRequest = function (request, response) {
    
    var eventId = request.body.event_id;
    console.log("Event Id: " + eventId);
    
    dbAdapter.getEventDetails(eventId, function (result, data) {
        
        if (result == constants.SUCCESS) {
            common.sendSuccessResponse(data, response);
        }
        else {
            var message = "Database error";
            common.sendErrorReponse(message, response);
        }
    });
};