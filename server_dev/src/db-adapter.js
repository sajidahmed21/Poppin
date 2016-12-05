var constants = require("./constants");
var mysql = require("mysql");

var pool = mysql.createPool({
    connectionLimit: 5,
    host           : "127.0.0.1",
    user           : "root",
    password       : "1234",
    database       : "poppin_schema"
});

function query(queryString, params, callback){
    pool.getConnection(function(error, connection) {
        if (error) return callback(error);
        connection.query(queryString, params, function(error, result){
            connection.release();
            if (error) return callback(error, null);
            return callback(constants.SUCCESS, result);
        })
    })
}

/* Returns a list of all nearby events based on the given
 * given `longitude` and `latitude`.
 *
 * The data is returned asynchronously, as the second argument
 * of the `callback` function, whereas, its first argument simply
 * denotes if the operation was successful.
 */
exports.getListOfNearbyEvents = function (longitude, latitude, radius, callback) {

    console.log("Longitude: " + longitude);
    console.log("Latitude: " + latitude);
    
    

    var queryString = "SELECT * FROM event WHERE latitude BETWEEN ? AND ? AND longitude BETWEEN ? AND ?";
    var data = [(latitude - radius), (latitude + radius), (longitude - radius),  (longitude + radius)];
    console.log(data);
    query(queryString, data, function(err, rows){
        if(err === constants.SUCCESS){
            console.log('Data Recieved from the db\n');
            console.log(rows);
            callback(constants.SUCCESS, rows);
        }else{
            console.log(err);
            callback(constants.ERROR, err);//throw err;
        }
        
    });
    
    //callback(constants.SUCCESS, mockData);
};


/* Returns detailed information about an
 * event based on its `eventId`.
 *
 * The data is returned asynchronously, as the second argument
 * of the `callback` function, whereas, its first argument simply
 * denotes if the operation was successful.
 */
exports.getEventDetails = function (eventId, callback) {

    // var mockData = {

    //     "name":"CSC301 Club",
    //     "description":"This is an event description",
    //     "start_date":"2016-10-10 18:00:00",
    //     "end_date":"2016-10-10 21:00:00",
    //     "longitude":"22.943218",
    //     "latitude":"17.753906",
    //     "is_active":"0",
    //     "date_created":"2016-10-19 01:00:00"

    // };
    
    // callback(constants.SUCCESS, mockData);

    var queryString = "SELECT * FROM event WHERE id = ?";

    query(queryString, eventId, function(error, response){
        if (error === constants.SUCCESS) {
            callback(constants.SUCCESS, response);
        } else {
            callback(constants.ERROR);
        }
    })

};

exports.createNewEvent = function(event, callback){

    var data = {name: event.name,
                description: event.description,
                start_date: event.startDate,
                end_date: event.endDate,
                longitude: event.longitude,
                latitude: event.latitude,
                is_active: event.is_active
            };


    var queryString = "INSERT INTO event SET ?";    

    // Insert into database.
    query(queryString, data, function(error, response){
        callback(error);
    });
    

};


exports.createNewCommunity = function(community, callback){
    var queryString = "INSERT INTO community SET ?";

    // Insert into database.
    query(queryString, community, function(error, response){
        callback(error);
    });
}

exports.getAllCommunities = function(callback){
    var queryString = "SELECT * FROM community";

    query(queryString, null, function(error, response){
        if(error === constants.SUCCESS){
            callback(constants.SUCCESS, response);
        } else {
            callback(constants.ERROR, err);//throw err;
        }
    });
}

exports.getSingleCommunity = function(communityId, callback){
    var queryString = "SELECT * FROM community WHERE id = ?";

    query(queryString, communityId , function(error, response){
        if(error === constants.SUCCESS){
            callback(constants.SUCCESS, response);
        } else {
            callback(constants.ERROR, err);//throw err;
        }
    });
}