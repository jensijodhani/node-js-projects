const express = require('express')

const routes = express.Router();

const { subCategoryPage,addsubCategoryPage,insertSubcategory } = require('../controller/SubcatogoryCantroller');

const passport = require('passport');

routes.get('/',subCategoryPage);
routes.get('/addsubcategory',addsubCategoryPage);
routes.post('/insertsubcategory',insertSubcategory);



module.exports=routes;