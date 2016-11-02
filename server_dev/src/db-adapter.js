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
            name: "301 Study Group",
            start_date: "31-09-2016",
            end_date: "31-09-2016",
            longitude: "",//todo
            latitude: "",//todo
            distance: ""
            // .. etc
        },
        {
            name: "Gamer's Club League of Legends Tournement",
            start_date: "05-11-2016",
            end_date: "10-11-2016",
            longitude: "",//todo
            latitude: "",//todo
            distance: ""
            // .. etc
        },
        {
            name: "Party at Sigma Delta Phi house.",
            start_date: "25-12-2016",
            end_date: "01-01-2017",
            longitude:"",//todo
            latitude:"",//todo,
            distance:""
            // .. etc
        },
        {
            name: "Music Concert",
            start_date: "31-11-2015",
            end_date: "31-11-2015",
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
        // name: "some name",
        // start_time: "some time"
        // .. etc
    };
    
    callback(constants.SUCCESS, mockData);
};