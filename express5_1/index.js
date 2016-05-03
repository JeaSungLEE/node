var express = require('express');
var app = express();
function functionInJS(){
  alert('test');
}
app.set('port',process.env.PORT || 3000);

app.get('/',function(req,res){
  app.set('view engine', 'jade');
  res.render('index', {title:'Hey', message:req.query.name});
});

app.get('/about', function(req,res){
  app.set('view engine', 'jade');
  res.render('about',{title:'Hey', h1message:'모바일 웹 서버 프로그래밍', h3message:'본 과정에서는 모바일 웹서버를 구축할 수 있는 여러 기술들을 비교 분석하여 각각의 장단점을 이해한 후, 서비스에 적당한 기술을 선택할 수 있는 능력을 함양하도록 한다. 모바일 서비스를 위해 가장 주목 받고 있고 가장 빠르게 성장하고 있는 MEAN스택(MONHODB, EXPRESS, ANGULAR, NODE)을 합슥하고 구현하는 방법을 살펴본다'});
});

app.get('/mobile', function(req,res){
  app.set('view engine', 'jade');
  res.render('mobile',{title:'Hey', h1message:'모바일 웹 서버 프로그래밍', h3message:'본 과정에서는 모바일 웹서버를 구축할 수 있는 여러 기술들을 비교 분석하여 각각의 장단점을 이해한 후, 서비스에 적당한 기술을 선택할 수 있는 능력을 함양하도록 한다. 모바일 서비스를 위해 가장 주목 받고 있고 가장 빠르게 성장하고 있는 MEAN스택(MONHODB, EXPRESS, ANGULAR, NODE)을 합슥하고 구현하는 방법을 살펴본다'});
});

app.get('/gugudan_list', function(req,res){
  app.set('view engine', 'jade');
  res.render('gugudan_list',{h3message:'asd'});
});

app.get('/gugudan', function(req,res){
  app.set('view engine', 'jade');
  res.render('gugudan',{h3message:req.query.dan});
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
