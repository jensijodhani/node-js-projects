const express = require('express');
const routes = express.Router();

const { Product, addProduct, insertProduct, deleteProduct, editProduct, updateProduct, changeProduct, ajaxgetsubCatagory, ajaxgetCatagory } = require('../controllers/productController');

// passport
const passport = require('passport');

// multer
const multer = require('multer');
const st = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    const unique = Math.round(Math.random() * 10000000)
    cb(null, file.fieldname + '-' + unique)
  }
})
const upload = multer({ storage: st }).single('image')

routes.get('/', passport.checkUser, Product)
routes.get('/addproduct', passport.checkUser, addProduct)
routes.post('/insertproduct', upload, insertProduct)

routes.get('/deleteproduct', deleteProduct)
routes.get('/editproduct', passport.checkUser, editProduct)
routes.post('/updateproduct', upload, updateProduct)

routes.get('/changeproduct', changeProduct)

// ajax
routes.get('/ajaxgetCatagory', ajaxgetCatagory)
routes.get('/ajaxgetsubCatagory', ajaxgetsubCatagory)

module.exports = routes;

