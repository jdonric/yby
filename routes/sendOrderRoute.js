'use strict'

require('dotenv').config();


var PORT = process.env.PORT || 3000;
var ENV = process.env.NODE_ENV || 'development';
var YBY_ACCT = process.env.YBY_ACCT;
var YBY_PW = process.env.YBY_PW;
var YBY_HOST = process.env.YBY_HOST;


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));



app.post('/send-order', function (req, res) {
    var message, smtpTrans;
    smtpTrans = nodemailer.createTransport({
       host: 'smtp.gmail.com',
       port: 465,
       secure: true,
    auth: {
        user: YBY_ACCT,
        pass: YBY_PW
      }
    });

message = {
    from: YBY_HOST,
    to: YBY_ACCT,
    subject: 'ORDER REQUEST from -' + req.body.yEmail,
    html: "<b>Hello world?</b>"
    //text: '<FROM ' + ' ' + req.body.fName + '>' + req.body.description
},
smtpTrans.sendMail(message, function (error, response) {
    if (error) {
      res.send('error');
    }
    else {
      res.send('confirmed');
    }
  });
});

