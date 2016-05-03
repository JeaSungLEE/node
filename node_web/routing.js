var http = require('http');

function write(req, res, text) {
  res.writeHead(200, { 'Content-Type':'text/plain'});
  res.end(text);
}

function routing(req, res){
  var path = req.url.replace(/\/?(?:\?.*)?$/,'').toLowerCase();

  switch(path){
    case '':
    write(req, res, 'Homepage');
    break;
    case '/about':
    write(req, res, 'About');
    break;
    default :
    write(req,res,'default');
    break;
  }
}

http.createServer(routing).listen(3000);
console.log('Server started on localhost:3000; press Crtl+C to terminate...');
