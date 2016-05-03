var express = require('express');
var app = express();

var users = [
  {name:'gildong', phone: '010-2421-2121'},
  {name:'minsu', phone: '010-4432-1578'},
  {name:'chulsu', phone: '010-1478-9843'}
];
app.set('port',process.env.PORT || 3000);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/',function(req,res){
  res.render('users',{users: users,title: "EJS code"});
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
