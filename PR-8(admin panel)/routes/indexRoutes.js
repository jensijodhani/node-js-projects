const express = require('express');

const routes = express.Router();

const { loginPage, loginUser, dashboardPage, registerPage, registerUser, logout, forgotPassword, otpPage } = require('../controller/AuthController');

const passport = require('passport');

routes.get('/', loginPage);
routes.get('/register', registerPage);
routes.post('/loginUser', passport.authenticate('local', { failureRedirect: '/' }), loginUser);
routes.post('/registerUser', registerUser);
routes.get('/dashboard', passport.checkUser, dashboardPage);
routes.get('/logout', logout);

routes.post('/forgotpassword', forgotPassword);
routes.get('/otp',otpPage);


module.exports = routes;