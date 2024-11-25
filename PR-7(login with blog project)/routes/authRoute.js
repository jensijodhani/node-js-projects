const express = require('express');

const routes = express.Router();
const { dashboardPage } = require('../controllers/AuthController');

routes.get('/',dashboardPage)

module.exports = routes;