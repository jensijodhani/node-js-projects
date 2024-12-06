const express = require('express');

const routes = express.Router();

const { viewExsubcategorypage,addExsubcategorypage,insertExsubcategory,deleteExsubcategory,editExsubcategory } = require('../controller/ExsubcategoryController');

routes.get('/',viewExsubcategorypage);
routes.get('/exaddsubcategory',addExsubcategorypage);
routes.post('/insertexsubcategory',insertExsubcategory);
routes.get('/deleteexsubcategory',deleteExsubcategory);
routes.get('/editexsubcategory',editExsubcategory);

module.exports = routes;
