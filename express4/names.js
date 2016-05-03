var express = require('express');
var app = express();

var names = [
  { id: 0, name: '홍길동'},
  { id: 1, name: '김기사'},
];

app.set('port',process.env.PORT || 3000);

app.get('/names/:id',function(req,res){
  res.type('text/plain');
  res.send(names[req.params.id].name);
});

app.get('/',function(req,res){
  res.type('text/plain');
  res.send('Express index');
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
