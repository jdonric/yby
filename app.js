//VARIABLES + FILES
var express = require('express');
var nodemailer = require('nodemailer'); //dev 
var bodyParser = require('body-parser');
const router = express.Router();
var ejs = require('ejs');
var ejsLint = require('ejs-lint');


var port = process.env.PORT || 4000;


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

app.post('/order', function(req, res){
    
    
   
});

app.post('/basket', function(req, res){
    let foodItem = {
        cookie: req.body.cookie-type,
       cupcake: req.body.cupcake-type,
       cinnamon: req.body.cinnamon-type,
       pie: req.body.pie-type,
        brownie: req.body.brownie-type
}
        res.render('basket', {foodItem: foodItem});
});




//LISTENING
app.listen(port, function (req, res){
    console.log(`TUNED INTO 4000`);
});
