var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');
var index = require('./app_server/routes/index');
var app = express();
var mongoose = require('mongoose');
<<<<<<< HEAD

=======
>>>>>>> 0c0ef5bd352bac4a8478ff4f943c6935bf1f4383

//View engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'jade');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static(path.join(__dirname, '/app_server/public')));
app.use(session( {secret: "String for encrypting cookies." } ));
app.use('/', index);

//mongo connection
mongoose.connect('mongodb://54.218.249.201:27017/webamazers', {
    autoReconnect: true, reconnectTries: Number.MAX_VALUE, keepAlive: true
})
mongoose.connection.on('connected', () => {
    console.log("Connected")
})
mongoose.connection.on('error', (err) => {
    console.log(err)
})


module.exports = app;
app.listen(3000);
