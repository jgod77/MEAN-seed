var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var mongoose = require("mongoose")
mongoose.Promise = require('bluebird');

var db = require('./config/db');


var app = express();


var port = process.env.PORT || 8080;

mongoose.connect(db.url);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

app.use(express.static(__dirname + '/dist'));

require('./app/routes')(app);

app.listen(port);



console.log('App is up on port ' + port);



exports = module.exports = app;