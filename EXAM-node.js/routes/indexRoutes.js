const express = require('express')
const { registerpage, registerusers, loginpage, loginuser, viewPage, addPage, insertdata, deletData, editpage, logout, updateData, AddtoCrat, AddtoCratview, deletecart,buyNow } = require('../controller/IndexController')

const routes = express.Router()

// passport
const passport = require('passport');

// multer
const multer = require('multer');
const st = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        const uniqname = Date.now();
        cb(null, `${file.fieldname}-${uniqname}`);
    }
})
const fileUpload = multer({ storage: st }).single('image');

// authtication
routes.get('/', registerpage)  
routes.get('/login', loginpage)
routes.post('/register', registerusers)
routes.post('/loginuser', passport.authenticate('local', { failureRedirect: '/' }), loginuser)

// addtocart
routes.get('/addtocart',AddtoCrat)
routes.get('/AddtoCratview',AddtoCratview)
routes.get('/deletecart',deletecart)  
routes.get('/buynow',buyNow)   



// crud
routes.get('/view', passport.checkUser, viewPage)
routes.get('/add', passport.checkUser, addPage)
routes.post('/insertdata', fileUpload, insertdata)
routes.get('/deletdata/:id', deletData)
routes.get('/editpage/:id', passport.checkUser, editpage)
routes.post('/update', fileUpload, updateData)

// logout
routes.get('/logout', logout)

module.exports = routes   