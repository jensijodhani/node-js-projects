const express = require('express')

const routes = express.Router();

const { subCategoryPage,addsubCategoryPage,insertSubcategory } = require('../controller/SubcatogoryCantroller');

const passport = require('passport');

routes.get('/',passport.checkUser,subCategoryPage);
routes.get('/addsubcategory',passport.checkUser,addsubCategoryPage);
routes.post('/insertsubcategory',insertSubcategory);

module.exports=routes;