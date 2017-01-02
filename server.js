var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");


var db = require('./config/db');


var app = express();


var port = process.env.PORT || 8080;


app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

require('./app/routes')(app);

app.listen(port);

console.log('App is up on port ' + port);

exports = module.exports = app;