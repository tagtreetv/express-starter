var express = require('express')
  path = require('path');

var app = express();

app.engine('html', require('hogan-express'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.set('layout', 'layout') 

app.get('/', function(req, res){
  res.render('index', { title: 'Welcome!'});
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.send(500, 'Something broke!');
});

app.listen(process.env.port || 3000);

