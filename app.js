var express      = require('express');
var path         = require('path');
var favicon      = require('static-favicon');
var express      = require('express');
var logger       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');
var mongoose     = require('mongoose');
var cons = require('consolidate');


mongoose.connect('mongodb://edu_ramme:Matematica-1@ds115340.mlab.com:15340/eduardo');


// var Urls = require('./models/urls');
 var Users = require('./models/users');

var index = require('./routes/index');
var app = express();
app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');


app.set(express.static(__dirname + '/public'));

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(session({ secret: 'sua-chave-secreta' }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index);

app.listen(3000, function() {
    console.log('Express server listening on port 3000');
});

module.exports = app;
