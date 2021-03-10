const express = require('express')
const router = express.Router()

const post = require('./api/post.route')

// Routes
router.use('/post', post)

module.exports = router

// api/post
