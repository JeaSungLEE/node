var express = require('express');
var app = express();

app.set('port',process.env.PORT || 3000);

app.get('/',function(req,res){
  res.redirect('/about');
});

app.get('/about', function(req,res){
  res.type('text/plain');
  res.sendFile(__dirname + '/about.html');
});

app.get('/headers', function(req,res){
  res.type('text/plain');
  var s = '';

  for (var name in req.headers){
    s += name +':' + req.headers[name] + '\n';
  }

  res.send(s);
});

app.use(function(req,res){
  res.type('text/plain');
  res.status('404');
  res.send('404 - Not Found');
});

app.use(function(err,req,res,next){
  console.error(err.stack);
  res.type('text/plain');
  res.status('500');
  res.send('500 - Server Error');
});

app.listen(app.get('port'),function(){
  console.log('Express started on http://localhost' +
app.get('port') + ': press Ctrl-c to terminate.');
});
