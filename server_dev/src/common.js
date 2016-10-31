const SUCCESS = "SUCCESS";

exports.sendJSONResponse = function (content, response) {
    response.writeHead(200, {
        'Content-Type': 'application/json'
    });
    response.end(JSON.stringify(content));
};

exports.sendSuccessResponse = function(response) {
    var body = {result: SUCCESS};
    exports.sendJSONResponse(body, response);
};