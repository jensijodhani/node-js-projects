const express = require('express')

const routes = express.Router();

const { subCategoryPage,addsubCategoryPage,insertSubcategory,editSubcategory } = require('../controller/SubcategoryCantroller');

const passport = require('passport');

routes.get('/',passport.checkUser,subCategoryPage);
routes.get('/addsubcategory',passport.checkUser,addsubCategoryPage);
routes.post('/insertsubcategory',insertSubcategory);
routes.get('/subcategory/editsubcategory',editSubcategory);

module.exports=routes;