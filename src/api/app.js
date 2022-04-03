const morgan = require('morgan');
const express = require('express');
const routes = require('./routes/index')
const cors = require('cors');
const env = require('dotenv').config();

const flash = require('express-flash');
const session = require('express-session');
const passport = require('passport');

const app = express();
app.use(express.json());
app.use(morgan("dev"))
app.use(cors())

//app.use(express.urlencoded({extended: false}));
app.use(flash());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize());
app.use(passport.session());


app.use('/', routes)

const port = process.env.APP_PORT || 3001
app.listen(port, () => {
  console.log('Listening on port ' + port);
})