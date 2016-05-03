
var express = require('express');
var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var formidable = require('formidable');
var bodyparser = require('body-parser').urlencoded({extended: true});
app.use(bodyparser);

app.engine('handlebars',handlebars.engine);
app.set('port',process.env.PORT || 3000);
app.set('view engine', 'handlebars');

app.get('/login',function(req,res){
  res.render('login');
});

app.post('/upload_do', function(req,res){
  var form = new formidable.IncomingForm();
  form.uploadDir = __dirname + '/uploads';
  form.keepExtensions = true;

  form.parse(req);

  res.redirect('/upload_ok');
});

app.get('/upload',function(req,res){
  res.render('upload');
});

app.get('/upload_ok',function(req,res){
  res.render('upload_ok');
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
