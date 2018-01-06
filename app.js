var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var assert = require('assert');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var helmet = require('helmet');

var config = require('./config');

var index = require('./routes/index');
var preset = require('./routes/preset');
var login = require('./routes/login');
var register = require('./routes/register');
var help = require('./routes/help');
var debug = require('./routes/debug');

var MongoDBStore = require('connect-mongodb-session')(session);

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(helmet());

// Codi de sessió:
var store = new MongoDBStore({
    uri: config.mongoUrl,
    collection: 'sessions'
});
store.on('error', function(error) {
    assert.ifError(error);
    assert.ok(false);
});
app.use(session({
    secret: 'quadramatsecret',
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
    },
    store: store,
    resave: true,
    saveUninitialized: true
}));

// Així podem accedir a la session desde totes les vistes,
// sense haver de passar la sessió sempre (al res.render)
app.use(function(req,res,next){
    res.locals.session = req.session;
    next();
});

app.use('/', index);
app.use('/preset', preset);
app.use('/login', login);
app.use('/register', register);
app.use('/help', help);
app.use('/debug', debug);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
