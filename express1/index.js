var express = require('express');
var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var mytext = require('./lib/mytext');

app.engine('handlebars',handlebars.engine);
app.set('port',process.env.PORT || 3000);

app.get('/',function(req,res){
  res.type('text/plain');
  res.send('Express index');
});

app.get('/mytext', function(req, res){
  res.type('text/plain');
  res.send(mytext.getMyText());
});

app.get('/handlebars',function(req,res){
  app.set('view engine','handlebars')
});

app.get('/about',function(req,res){
  res.type('text/plain');
  res.send('Express About');
});

app.get('/jade',function(req,res){
  app.set('view engine', 'jade');
  res.render('test', {title:'Hey', message:'Hello, there!'});
});
app.use(express.static(__dirname + '/public'));

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
