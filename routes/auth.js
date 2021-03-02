const express = require('express')

const { addExpoPushToken, login, register } = require('../controllers')
const { requireAuth } = require('../middlewares')

const router = express.Router()

router.post('/auth', login)

router.post('/user', register)

router.put('/expo-push-token', requireAuth, addExpoPushToken)

module.exports = router
