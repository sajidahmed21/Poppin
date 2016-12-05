var constants = require("./constants");
var common = require(constants.common);
var dbAdapter = require(constants.dbAdapter);

/* Handler function for getting all communities requests.
 * This function is the first trigger point
 * for getting a community.
*/
exports.getCommunities = function (request, response) {
    
    //Get a single community.
    if (request.query.hasOwnProperty('id')){
        var communityId = parseInt(request.query.id);
        
        dbAdapter.getSingleCommunity(communityId, function(result, data){
            if (result === constants.SUCCESS) {
                common.sendSuccessResponse(data[0], response);
            } else {
                var message = "Database error";
                 common.sendErrorResponse(message, response);
            }
        });


    //Get all communities
    } else {
        dbAdapter.getAllCommunities(function(result, data){
            if (result === constants.SUCCESS) {

                //Format to readable data in sending response
                var formattedData = {};
                for (var i = 0; i < data.length; i++) {
                    var eventID = data[i].id;
                    formattedData[eventID] = data[i];
                }
                common.sendSuccessResponse(formattedData, response);

            } else {
                var message = "Database error";
                 common.sendErrorResponse(message, response);
            }
        });
    }
};


/* Creates a new event 
 */
exports.createNewCommunity = function (request, response){
    var name = request.body.name;
    var description = request.body.description;

    //Probably modify these to match schema after.

    var newCommunity = {
        name: name,
        description: description
    };
    
    dbAdapter.createNewCommunity(newCommunity, function(result){
        if (result === constants.SUCCESS) {
            common.sendSuccessResponse(result, response);
        }
        else {
            var message = "Database error";
            common.sendErrorResponse(message, response);
        }
    });


};