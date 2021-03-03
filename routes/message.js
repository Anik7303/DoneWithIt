const express = require('express')

const { getMessages, postMessage } = require('../controllers')
const { requireAuth } = require('../middlewares')

const router = express.Router()

router.use(requireAuth)

router.get('/', getMessages)

router.post('/', postMessage)

module.exports = router
