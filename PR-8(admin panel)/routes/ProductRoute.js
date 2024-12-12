const express=require('express');

const routes=express.Router();

const { productviewPage, addproductPage, insertProduct, ajaxSubcategory } = require('../controller/ProductController');

routes.get('/',productviewPage);
routes.get('/addproduct',addproductPage);
routes.post('/insertproduct',insertProduct)
routes.get('/ajaxsubcatwisedata',ajaxSubcategory);

module.exports=routes;