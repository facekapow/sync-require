'use strict';

var fs = require('fs');
var http = require('http');
var MiniRoute = require('mini-route');
var miniFile = require('mini-file');

var server = http.createServer();
var router = new MiniRoute(server, {
  notFound: true
});

miniFile(router, __dirname);

router.get('/sync_require.js', function(req, res) {
  fs.readFile(__dirname + '/../sync_require.js', function(err, data) {
    if (err) {
      res.statusCode = 500;
      return res.end('internal server error.');
    }
    res.statusCode = 200;
    res.end(String(data));
  });
});

server.listen(8080);
