//VARIABLES + FILES
var express = require('express');
//var nodemailer = require('nodemailer'); //dev 
var bodyParser = require('body-parser');
const router = express.Router();
var ejs = require('ejs');
var ejsLint = require('ejs-lint');
//const mongoose = require('mongoose');


var app = express();
app.set('view engine', 'ejs');

// use body-parser middleware
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));




//BASIC GET ROUTES
app.get('/', function(req, res){
    res.render('index');
});

app.get('/order', function(req, res){
    res.render('order');
});




//LISTENING
app.listen(4000, function (req, res){
    console.log(`TUNED INTO 4000`);
});
