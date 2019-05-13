var http = require('http');
var count = 1;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
  count++;
  console.log('The request came.' + count);
}).listen(8080);