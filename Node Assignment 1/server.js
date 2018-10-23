var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var dishRouter = require('./dishRouter');
var promoRouter = require('./promoRouter');
var leaderRouter = require('./leaderRouter');

var hostname = '3.209.188.103';
var port = 3000;

var app = express();

app.use(morgan('dev'));

app.use(bodyParser.json());

app.use('/dishes',dishRouter);
app.use('/promos',promoRouter);
app.use('/leaders',leaderRouter);

app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});
