const express = require('express');
const routes = express.Router();

const { loginPage, registerPage, registerUser,loginUser,dashboardPage,logoutUser,forgotPassword,otpPage,postOtp,newpass,postNewpassword , myProfile , profileChange, postChangepassword , changePassword } = require('../controllers/AuthController');

const passport = require('passport');

routes.get('/',loginPage);
routes.get('/register',passport.checkUser,registerPage)
routes.post('/registeruser',registerUser);
routes.post('/loginuser',passport.authenticate('local',{failureRedirect:'/'}),loginUser)
routes.get('/dashboard',passport.checkUser,dashboardPage);
routes.get('/logoutuser',logoutUser)

//forgot password (otp)
routes.post('/forgotpassword',forgotPassword)
routes.get('/otp',otpPage)
routes.post('/postotp',postOtp)
routes.get('/newpass',newpass)
routes.post('/postnewpassword',postNewpassword)

// my profile
routes.get('/myprofile',passport.checkUser,myProfile);
routes.post('/profilechange', profileChange);

// change password 
routes.post('/postChangepassword', postChangepassword );
routes.get('/changepassword',passport.checkUser,changePassword );

module.exports = routes;