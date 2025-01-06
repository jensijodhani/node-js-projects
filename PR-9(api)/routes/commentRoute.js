const express = require('express');
const routes = express.Router();

const { addComment } = require("../controllers/CommentController");
const { verifyToken } = require('../middleware/Auth');

routes.post('/addcomment', verifyToken, addComment);

module.exports = routes
