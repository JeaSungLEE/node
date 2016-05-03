var http = require("http");
var fs = require("fs");

http.createServer(function(req, res){
  if(req.url == '/'){
    jsonReadFile(res);
  }
}).listen(3000,"127.0.0.1");

function jsonReadFile(res){
  fs.readFile('./callback_text.json',function(err,data){
    if(err) return logErr(err);
    htmlReadFile(res,data);
  });
}

function htmlReadFile(res,data){
    var titles = JSON.parse(data.toString());
    fs.readFile('./callback_template.html',function(err,data){
      if(err) return logErr(err);
      htmlContents(data,titles,res);
    });
}

function htmlContents(data,titles,res){
    var tmpl = data.toString();
    var html = tmpl.replace('%',titles.join('</li><li>'));
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end(html);
}

function logErr(){
    console.error(err);
    res.end('Server Error');
}
