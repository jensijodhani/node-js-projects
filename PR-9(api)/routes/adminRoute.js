const express = require('express');
const routes = express.Router();

const { allPost, allComment } = require('../controllers/AdminController')
const { Admin, verifyToken } = require('../middleware/Auth')

routes.get('/allpost', verifyToken, Admin, allPost)
routes.get('/allcomment', verifyToken, Admin, allComment)

module.exports = routes