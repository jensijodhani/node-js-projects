const express = require('express');

const routes = express.Router();

routes.use('/',require('./AuthRoute'));
routes.use('/category',require('./categoryRoute'));
routes.use('/subcategory',require('./SubcategoryRoute'));

module.exports = routes;