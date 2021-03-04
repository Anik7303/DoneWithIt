const express = require('express')

const { sendNotification } = require('../controllers')
const { requireAuth } = require('../middlewares')

const router = express.Router()

router.use(requireAuth)

router.post('/', sendNotification)

module.exports = router
