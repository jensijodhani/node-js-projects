const express = require('express');
const routes = express.Router();

const {exsubCatagory ,addexsubCatagory,insertexsubCatagory, deleteexsubCatagory , editexsubCatagory ,updateexsubCatagory , changeexsubStatus , ajaxgetCatagory } = require('../controllers/exsubcatagoryController');

const passport = require('passport');

routes.get('/', passport.checkUser,exsubCatagory)
routes.get('/addexsubcatagory',passport.checkUser ,addexsubCatagory)
routes.post('/insertexsubcatagory', insertexsubCatagory)

routes.get('/deleteexsubcatagory', deleteexsubCatagory)
routes.get('/editexsubcatagory',passport.checkUser, editexsubCatagory)
routes.post('/updateexsubcatagory',updateexsubCatagory)

// change status
routes.get('/changeexsubstatus',changeexsubStatus)

// ajax
routes.get('/ajaxgetcatagory', ajaxgetCatagory)

module.exports = routes;

