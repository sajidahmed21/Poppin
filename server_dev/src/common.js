var constants = require("./constants");


/* Sends a success response back to client.
 * `content` is the data that will be included as part of the response.
 */
exports.sendSuccessResponse = function (content, response) {
    response.writeHead(200, {
        'Content-Type': 'application/json'
    });
    
    var responseBody = {
        status: constants.SUCCESS,
        data: content
    };
    
    response.end(JSON.stringify(responseBody));
};


/* Sends an error response back to client.
 * `message` is the error message that will be included as part of the response.
 */
exports.sendErrorResponse = function (message, response) {
    response.writeHead(500, {
        'Content-Type': 'application/json'
    });
    
    var responseBody = {
        status: constants.ERROR,
        message: message
    };
    
    response.end(JSON.stringify(responseBody));
};