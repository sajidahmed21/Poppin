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
    
    // TODO:
    
    var mockData = [
        {
            // name: "some name",
            // start_date: "some date"
            // end_date: "some date"
            // .. etc
        },
        {
            // name: "some name",
            // start_date: "some date"
            // end_date: "some date"
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