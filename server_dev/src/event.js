var constants = require("./constants");
var common = require(constants.common);
var dbAdapter = require(constants.dbAdapter);


/* Handler function for NearbyEvents requests.
 * This function is the first trigger point
 * whenever a NearbyEvents request is received.
*/
exports.getEvents = function (request, response) {
    
    var radius = request.query.radius;
    var longitude = request.query.longitude;
    var latitude = request.query.latitude;
    console.log("Long: " + longitude);
    console.log("Lat: " + latitude);
    console.log("Rad: " + radius);
    
    dbAdapter.getListOfNearbyEvents(longitude, latitude, function (result, data) {
        
        if (result == constants.SUCCESS) {
            var today = new Date();

            for(var i = 0; i < data.length; i++){
                var curr_event = data[i];
                var year = curr_event.end_date.substring(6,10);
                var month = curr_event.end_date.substring(3,5);
                var day = curr_event.end_date.substring(0,2);

                //if(parseInt(year)>= today.getFullYear() && parseInt(month) + 1 >= today.getMonth()){
                if(parseInt(year)== today.getFullYear() && parseInt(month) == today.getMonth() + 1 && parseInt(day) < today.getDate()){
                    data.splice(i, i + 1);
                    i--;
                }

                //}
                else if(parseInt(year)< today.getFullYear() || (parseInt(year) == today.getFullYear() && parseInt(month) < today.getMonth() + 1)){
                    data.splice(i, i + 1);
                    i--;
                }
            }
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
exports.getEventDetails = function (request, response) {
    
    var eventId = request.params.id;
    console.log("Event Id: " + eventId);
    
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

/* Creates a new event 
 */
exports.createNewEvent = function (request, response){
    var name = request.body.name;
    var description = request.body.description;
    var startDate = request.body.start_date;
    var endDate = request.body.end_date;

    //Probably modify these to match schema after.
    //lat/long
    var dateCreated = new Date();

    var event = {
        name: name,
        description: description,
        startDate: startDate,
        endDate: endDate,
        //longitude: 
        //latitude:
        //is_active
        dateCreated: dateCreated
    };
    
    dbAdapter.createNewEvent(event, function(result){
        if (result == constants.SUCCESS) {
            common.sendSuccessResponse(null, response);
        }
        else {
            var message = "Database error";
            common.sendErrorResponse(message, response);
        }
    });


};