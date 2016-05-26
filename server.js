var express = require('express');

var app = express();

var path = require('path');

var bodyParser = require('body-parser');

var passport = require('passport');

var flash = require('connect-flash');

var morgan = require('morgan');

var cookieParser = require('cookie-parser');

var session = require('express-session');

app.use(express.static(path.join(__dirname, './client')));

require('./server/config/mongoose.js');

require('./server/config/passport.js')(passport); // pass passport for configuration

app.use(morgan('dev')); 

app.use(cookieParser());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded());

app.set("views", path.join(__dirname, "./client"));

app.set('view engine', 'ejs'); // set up ejs for templating

app.use(session({ secret: 'patentprojectpatent' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); 

require('./server/config/routes.js')(app, passport);

app.listen(8000, function(){
	console.log('listening on port 8000');
})