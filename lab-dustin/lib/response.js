'use strict';

module.exports = exports = {};

exports.sendText = function(res,status,message){
  res.writeHead(status,
  {'content-type': 'text/plain'});
  res.write(message);
  res.end();
};

exports.sendJSON = function(res,status,data){
  res.writeHead(status,
    {'content-type': 'application/json'});
  res.write(JSON.stringify(data));
  res.end();
};
