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
}