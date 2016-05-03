var express = require('express');
var app = express();
var mysql      = require('mysql');
var pool = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : 'wlfjd25',
  database : 'car'
});

app.set('port',process.env.PORT || 3000);

app.get('/',function(req,res){
  res.type('text/plain');
  pool.getConnection(function(err,connection){
    connection.query('SELECT * from car',function(err, rows){
    console.log("rows : "+JSON.stringify(rows));
    res.send({rows: rows});
    connection.end();
    });
  });
});

app.get('/mytext', function(req, res){
  res.type('text/plain');
  res.send(mytext.getMyText());
});

app.get('/about',function(req,res){
  res.type('text/plain');
  res.send('Express About');
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
