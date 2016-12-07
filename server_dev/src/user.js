var constants = require("./constants");
var common = require(constants.common);
var dbAdapter = require(constants.dbAdapter);
var bcrypt = require('bcryptjs');

exports.signUp = function (request, response) {
    console.log('Name: ' + request.body.first_name);
    request.body.password = bcrypt.hashSync(request.body.password.toString(), bcrypt.genSaltSync(10));
    dbAdapter.createUser(request.body, function(result, data){
      if (result === constants.SUCCESS) {
        genAuthToken(data, function(user) {
          common.sendSuccessResponse(user, response);
        }, function(){
          common.sendErrorResponse("Something went wrong 003.", response);
        });
      } else {
        common.sendErrorResponse("Bad data.", response);
      }
    });
};

exports.authorize = function (request, response) {
  var email = request.body.email;
  var password = request.body.password;

  dbAdapter.getUser(email, function(result, data){
    if (result === constants.SUCCESS) {
      console.log(password + " --- " + data.password);
      if (bcrypt.compareSync(password, data.password)) {
        console.log("getUser:");
        console.log(data);
        genAuthToken(data, function(user) {
          common.sendSuccessResponse(user, response);
        }, function(){
          common.sendErrorResponse("Something went wrong 003.", response);
        });
      } else {
        common.sendErrorResponse("Bad credentials 001.", response);
      }
    } else {
      console.log(result);
      common.sendErrorResponse("Bad credentials 000.", response);
    }
  });
};

function genAuthToken(data, success, error) {
  // Generate auth_token and return it.
  var token = bcrypt.hashSync(Math.random().toString(), bcrypt.genSaltSync(10));
  dbAdapter.createAuthToken({
    token: token,
    user_id: data.id
  }, function(result) {
    if (result === constants.SUCCESS) {
      success({
        token: token,
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email
      });
    } else {
        console.log(result);
        error();
    }
  });
}
