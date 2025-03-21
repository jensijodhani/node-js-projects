const express = require('express');
const routes = express.Router();

const { subCatagory , addsubCatagory , insertsubCatagory , deletesubCatagory ,editsubCatagory , updatesubCatagory ,changesubStatus } = require('../controllers/subcatagoryController');

const passport = require('passport');

routes.get('/',passport.checkUser,subCatagory)
routes.get('/addsubcatagory', passport.checkUser,addsubCatagory)
routes.post('/insertsubcatagory',insertsubCatagory)
routes.get('/deletesubcatagory',deletesubCatagory)
routes.get('/editsubcatagory',passport.checkUser,editsubCatagory)
routes.post('/updatesubcatagory',updatesubCatagory)

// change status
routes.get('/changesubstatus', changesubStatus )

module.exports = routes;
