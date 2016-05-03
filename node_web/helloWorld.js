var http = require('http');

function hello(req, res){
  res.writeHead(200, { 'Content-Type': 'text/plain'});
  res.end('Hello world!');
}

http.createServer(hello).listen(3000);

console.log('Server started on localhost:3000; press Crtl+C to terminate...');
