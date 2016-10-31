var common = require('./common');

exports.handleSignUpRequest = function (request, response) {
    console.log(request.body.name);
    console.log(request.body.username);
    console.log(request.body.password);
    
    common.sendSuccessResponse(response);
};