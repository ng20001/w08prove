const route = require('color-convert/route');
const express = require('express');

const feedController = require('../controllers/prove08controller');

const router = express.Router();

// GET 
router.get('/professional', feedController.getPosts);

// POST 
// router.post('/professional', feedController.createPost);

module.exports = router;