var express = require('express');
var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var bodyparser = require('body-parser').urlencoded({extended: true});
app.use(bodyparser);

app.engine('handlebars',handlebars.engine);
app.set('port',process.env.PORT || 3000);
app.set('view engine', 'handlebars');

app.get('/login',function(req,res){
  res.render('login');
});

app.post('/login_do',function(req,res){
  console.log('req.query.form = '+ req.query.form);

  if(req.body.login_id=='admin'&&req.body.login_pw=='admin'){
    res.redirect(303,'/login_ok')
  }else {
    res.redirect(303,'/login_not')
  }
});

app.get('/login_ok',function(req,res){
  res.render('login_ok');
});

app.get('/login_not',function(req,res){
  res.render('login_not');
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
