const express = require('express')

const { userListings } = require('../controllers')
const { requireAuth } = require('../middlewares')

const router = express.Router()

router.use(requireAuth)

router.get('/listings', userListings)

module.exports = router
