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
        // name: "some name",
        // start_time: "some time"
        // .. etc
    };
    
    callback(constants.SUCCESS, mockData);
};