const route = require('color-convert/route');
const express = require('express');

const feedController = require('../controllers/feed');

const router = express.Router();

// GET /feed/posts
route.get('/posts', feedController.getPosts);

module.exports = router;