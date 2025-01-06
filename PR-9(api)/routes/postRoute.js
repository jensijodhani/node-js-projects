const express = require('express');
const routes = express.Router();

const { addblog, viewblog, deleteblog, updateblog } = require("../controllers/PostController")
const { verifyToken, } = require('../middleware/Auth');

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
const upload = multer({ storage: st }).single('image')

// blog    
routes.post('/addblog', verifyToken, upload, addblog);
routes.get('/viewblog', verifyToken, viewblog);
routes.delete('/deleteblog', verifyToken, deleteblog);
routes.put('/updateblog', verifyToken, upload, updateblog);

module.exports = routes
