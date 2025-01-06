const express = require('express');
const routes = express.Router();

// auth
routes.use('/',require('./authRoute'))

// user
routes.use('/user',require('./userRoute'))
routes.use('/blog',require('./postRoute'))
routes.use('/comment',require('./commentRoute'))

// admin 
routes.use('/admin', require('./adminRoute'))

module.exports = routes;  