var constants = require("./constants");
var mysql = require("mysql");

var pool = mysql.createPool({
    connectionLimit: 5,
    host           : "noahnu.com",
    user           : "poppin",
    password       : "poppin_password",
    database       : "poppin_schema"
});

function query(queryString, params, callback){
    pool.getConnection(function(error, connection) {

        if (error) return callback(error);

        connection.query(queryString, params, function(error, result){
            connection.release();
            if (error) return callback(error, null);

            return callback(constants.SUCCESS, result);
        });
    });
}

exports.getUser = function(email, callback){
    var queryString = `
      SELECT
        U.id, U.first_name, U.last_name, U.email, L.password
      FROM user U
      JOIN login_credential L ON L.user_id = U.id
      WHERE email = ?
    `;

    query(queryString, [email], function(error, response){
        if(error === constants.SUCCESS && response.length > 0){
            callback(constants.SUCCESS, response[0] || false);
        } else {
            console.log(error);
            callback(constants.ERROR, error);//throw err;
        }
    });
}

exports.createUser = function(user, callback){
    var queryString = `INSERT INTO user SET first_name = ?, last_name = ?, email = ?`;
    query(queryString, [user.first_name, user.last_name, user.email], function(error, response){
        if(error === constants.SUCCESS){
            var user_id = response.insertId;
            query("INSERT INTO login_credential SET user_id = ?, password = ?",
                  [user_id, user.password], function(err, response){
                if(err === constants.SUCCESS){
                    callback(constants.SUCCESS, {
                      id: user_id,
                      first_name: user.first_name,
                      last_name: user.last_name,
                      email: user.email
                    });
                } else {
                    callback(constants.ERROR, err);//throw err;
                }
            });
        } else {
            callback(constants.ERROR, error);//throw err;
        }
    });
}

exports.createAuthToken = function(auth, callback){
    var queryString = `
      INSERT INTO third_party_credential SET
      user_id = ?, provider_id = ?, token = ?
    `;

    query(queryString, [auth.user_id, 'basic', auth.token], function(error, response){
        if(error === constants.SUCCESS){
            callback(constants.SUCCESS);
        } else {
            console.log(error);
            callback(constants.ERROR, error);//throw err;
        }
    });
}

exports.getUserByToken = function(token, callback){
    var queryString = "SELECT user_id FROM third_party_credential WHERE token = ?";

    query(queryString, [token], function(error, response){
        if(error === constants.SUCCESS && response.length > 0){
            callback(constants.SUCCESS, response[0].user_id || false);
        } else {
            callback(constants.ERROR, error);//throw err;
        }
    });
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

    var lon = [
        longitude - radius/Math.abs(Math.cos(latitude * Math.PI/180)*111),
        longitude + radius/Math.abs(Math.cos(latitude * Math.PI/180)*111)
    ];

    var lat = [
        latitude - radius/111,
        latitude + radius/111
    ];

    var queryString = `
        SELECT *, (
            6366.6 * 2 * ASIN(SQRT(
                POWER(SIN((? - event.latitude) * PI()/180 / 2), 2) +
                COS(? * PI()/180) * COS(event.latitude * PI()/180) *
                POWER(SIN((? - event.longitude) * PI()/180 / 2), 2)
            ))
        ) as distance
        FROM event
        WHERE event.longitude BETWEEN ? AND ? AND event.latitude BETWEEN ? AND ?
        ORDER BY distance ASC
        LIMIT 100
    `;

    var data = [latitude, latitude, longitude, lon[0], lon[1], lat[0], lat[1]];
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
    var queryString = `
        INSERT INTO event SET
        name = ?, description = ?,
        start_date = FROM_UNIXTIME(?), end_date = FROM_UNIXTIME(?),
        longitude = ?, latitude = ?, is_active = 1
    `;

    var data = [
        event.name, event.description,
        event.start_date, event.end_date,
        event.longitude, event.latitude
    ];

    // Insert into database.
    query(queryString, data, function(error, response){
        if (error === constants.SUCCESS && response.insertId) {
            end++;
            callback(constants.SUCCESS, { event_id: response.insertId });
        } else {
            callback(error);
        }
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

    query(queryString, communityId, function(error, response){
        if(error === constants.SUCCESS){
            callback(constants.SUCCESS, response);
        } else {
            callback(constants.ERROR, err);//throw err;
        }
    });
}

var start = 1; // TODO: Change this
var end = start;

exports.getEventsForUser = function(userId, callback) {

    var queryString = "SELECT * FROM event WHERE id <= ? AND id >= ?";

    var params = [start, end];
    query(queryString, params, function(result, response){
        if(result === constants.SUCCESS) {
            var data = {organized: response};

            queryString = "SELECT * FROM event WHERE id > ?";
            query(queryString, end, function(result, response) {

                if(result === constants.SUCCESS){
                    data.upcoming = response;
                    callback(constants.SUCCESS, data);
                }
                else {
                    callback(constants.ERROR, err);
                }
            });
        } else {
           callback(constants.ERROR, err);
        }
    });
}
