var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    nodemailer = require('nodemailer');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
    res.render('index', {title: 'PC Not Working?'});
});

app.get('/about', function(req, res){
    res.render('about');
});

app.get('/contact', function(req, res){
    res.render('contact');
});

app.post('/contact/send', function(req, res){
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth : {
            user : 'cer1dumru@gmail.com',
            pass : 'Mystery@1996'
        }
    });

    var mailOptions = {
        from: 'Prakriti Dumaru <cer1dumru@gmail.com>',
        to : '071bct523@pcampus.edu.np',
        subject: 'Website Submission',
        text: 'You have the submission with following details.. Name: ' +req.body.name+'Email: '+req.body.email+'Message: '+req.body.message,
        html: '<p>You have the submission with following details..</p><ul><li>Name: ' +req.body.name+ '</li><li>Email: ' + req.body.email + '<li></li>Message: ' +req.body.message+'</li></ul>'
    }

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log('error');
            res.redirect('/');
        }else{
            console.log('Message Sent!' + info.response);
            res.redirect('/');
        }
    })
});

app.listen(3000);
console.log('Server running at port 3000');