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
    res.render('index', {title: 'Welcome'});
});

app.get('/about', function(req, res){
    res.render('about');
});

app.listen(3000);
console.log('Server running at port 3000');