var constants = require("./constants");

/* Returns a list of all nearby events based on the given
 * given `longitude` and `latitude`.
 *
 * The data is returned asynchronously, as the second argument
 * of the `callback` function, whereas, its first argument simply
 * denotes if the operation was successful.
 */
exports.getListOfNearbyEvents = function (longitude, latitude, callback) {

    console.log("Longitude: " + longitude);
    console.log("Latitude: " + latitude);
    
    var today = new Date()/1000;
    var date1 = today + (60*60*24 * 4); //event 1 day ago
    var date2 = today + (60*60*24); //event in 1 day
    var date3 = today + (60*60*24 * 3); //event was 1 month ago
    var date4 = today + (60*60*24*5); //event is coming up next month
    // TODO:
    
    var mockData = [
        {
            name: "301 Study Group",
            start_date: date1,
            end_date: date1,
            longitude: "",//todo
            latitude: "",//todo
            distance: ""
            // .. etc
        },
        {
            name: "Gamer's Club League of Legends Tournement",
            start_date: date2,
            end_date: date2,
            longitude: "",//todo
            latitude: "",//todo
            distance: ""
            // .. etc
        },
        {
            name: "Party at Sigma Delta Phi house.",
            start_date: date3,
            end_date: date3,
            longitude:"",//todo
            latitude:"",//todo,
            distance:""
            // .. etc
        },
        {
            name: "Music Concert",
            start_date: date4,
            end_date: date4,
            longitude: "",//todo
            latitude: "",//todo
            distance: ""
            // .. etc
        }
        // .. {}, {}, May be a few more events
    ];
    
    callback(constants.SUCCESS, mockData);
};


/* Returns detailed information about an
 * event based on its `eventId`.
 *
 * The data is returned asynchronously, as the second argument
 * of the `callback` function, whereas, its first argument simply
 * denotes if the operation was successful.
 */
exports.getEventDetails = function (eventId, callback) {
    
    // TODO:
    
    var mockData = {

        "name":"CSC301 Club",
        "description":"This is an event description",
        "start_date":"2016-10-10 18:00:00",
        "end_date":"2016-10-10 21:00:00",
        "longitude":"22.943218",
        "latitude":"17.753906",
        "is_active":"0",
        "date_created":"2016-10-19 01:00:00"

    };
    
    callback(constants.SUCCESS, mockData);
};

exports.createNewEvent = function(event, callback){

    var data = {name: event.name,
                description: event.description,
                start_date: event.startDate,
                end_date: event.endDate,
                longitude: event.longitude,
                latitude: event.latitude,
                is_active: event.is_active,
                date_created: dateCreated}
    var queryString = "INSERT INTO event SET ?"

    // Insert into database.
    connection.query(queryString, data, function(error, response){
        if (err) {
            callback(constants.ERROR);
        } else {
            callback(constants.SUCCESS);
        }
    })
    console.log(response);

};