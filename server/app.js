var express = require('express');
var app = express();
var pug = require('pug');

app.set('view engine', 'pug');
app.set('views', './server/public/views');
app.use(express.static('./server/public'));
app.get('/', function (req, res) {
  res.render('index');
});

app.listen(3000);
