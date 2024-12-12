const express=require('express');

const routes=express.Router();

const { productviewPage, addproductPage, ajaxSubcategory } = require('../controller/ProductController');

routes.get('/',productviewPage);
routes.get('/addproduct',addproductPage);
routes.get('/ajaxsubcatwisedata',ajaxSubcategory);

module.exports=routes;