const express = require('express');

const port = 8000;

const app = express();

const db = require('./config/db');

app.set('view engine', 'ejs');

const path = require('path');

app.use('/',express.static(path.join(__dirname,'/public')))

const passport = require('passport');

const passportLocal = require('./config/passportLocal');

const session = require('express-session');

app.use(session({
    secret: 'rnw3',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}))

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setUser);

app.use(express.urlencoded());

app.use('/', (require('./routes/indexRoutes')));

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`server is start on port :- ${port}`);
})