const createError = require('http-errors');
var express = require('express');
var path = require('path');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const stationsRouter = require('./routes/stations');
const authRouter = require('./routes/auth');
// var usersRouter = require('./routes/users');

let reviewRouter = require('./routes/review');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/reviews', reviewRouter)
app.use('/stations', stationsRouter);
app.use ('/auth', authRouter);

//testing
app.get("/users",(req, res) => {
  res.json([{
    id: 1,
    name: "ster",
    password: 'town'
  }, {
    id: 2,
    name: "JKL",
    password: 'RL'
  }]);
})

app.listen(9000, function() {
  console.log("Server is running on port " + 9000);
});

// app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.log(err)
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
