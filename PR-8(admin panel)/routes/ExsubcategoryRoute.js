const express = require('express');

const routes = express.Router();

const { viewExsubcategorypage,addExsubcategorypage,insertExsubcategory,deleteExsubcategory,editExsubcategory,updateExsubcategory,changeStatus,ajaxsubcategory } = require('../controller/ExsubcategoryController');

const passport = require('passport');

routes.get('/',passport.checkUser,viewExsubcategorypage);
routes.get('/exaddsubcategory',passport.checkUser,addExsubcategorypage);
routes.post('/insertexsubcategory',insertExsubcategory);
routes.get('/deleteexsubcategory',deleteExsubcategory);
routes.get('/editexsubcategory',editExsubcategory);
routes.post('/updateexsubcategory',updateExsubcategory);

// changeStatus
routes.get('/changestatus',changeStatus);  

//ajax
routes.get('/ajaxsubcategory',ajaxsubcategory)

module.exports = routes;
