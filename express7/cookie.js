
var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
app.use(cookieParser());

app.set('port',process.env.PORT || 3000);

app.get('/cookie',function(req,res){
  var counter = req.cookies.counter || 0;
  counter++;
  res.cookie('counter',counter,{
    maxAge:60*1000,
  });

  res.send('counter: '+ counter);
});

app.get('/counter_clear',function(req,res){
  res.clearCookie('counter');
  res.redirect('/counter');
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
