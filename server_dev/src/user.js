var constants = require('./constants');
var common = require(constants.common);

exports.signUp = function (request, response) {
    console.log('Name: ' + request.body.name);
    console.log('Username: ' + request.body.username);
    console.log('Password: ' + request.body.password);
    
    common.sendSuccessResponse(null, response);
};