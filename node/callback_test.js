var http = require("http");
var fs = require("fs");

http.createServer(function(req, res){
  if(req.url == '/'){
    fs.readFile('./callback_text.json',function(err,data){
      if(err){
        console.error(err);
        res.end('Server Error');
      }
      else{
        var titles = JSON.parse(data.toString());
        fs.readFile('./callback_template.html',function(err,data){
          if(err){
            console.error(err);
            res.end('Server Error');
          }
          else{
            var tmpl = data.toString();
            var html = tmpl.replace('%',titles.join('</li><li>'));
            res.writeHead(200, {'Content-Type':'text/html'});
            res.end(html);
          }
        });
      }
    });
  }
}).listen(3000,"127.0.0.1");
