var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productRouter = require('./routes/product');
var commentRouter = require('./routes/comments');
let db = require("./database/models");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session(
  {
    secret: "Nuestro mensaje",
    resave: false,
    saveUninitialized: true
  }
));
app.use(function(req, res, next) {
  res.locals.user = false;

  if (req.session.user != undefined) {
    res.locals.user = req.session.user;
    return next();
  }

  // if (req.cookies.userId != undefined) {
  //   db.User.findByPk(req.cookies.userId)
  //     .then(function(user) {
  //       if (user != null) {
  //         req.session.user = {
  //           id: user.id,
  //           name: user.name,
  //           email: user.email
  //         };

  //         res.locals.user = req.session.user;
  //       }

  //       return next();
  //     })
  //     .catch(function(error) {
  //       return next(error);
  //     });
  // } else {
  //   return next();
  // }
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/product', productRouter);
app.use('/comment',commentRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
