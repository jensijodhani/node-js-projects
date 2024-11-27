const express = require('express');

const routes = express.Router();
const { loginPage, loginUser, dashboardPage, registerPage, registerUser, logout } = require('../controller/AuthController');

routes.get('/', loginPage);
routes.get('/register', registerPage);
routes.post('/loginUser', loginUser);
routes.post('/registerUser', registerUser);
routes.get('/dashboard', dashboardPage);
routes.get('/logout', logout);

module.exports = routes;