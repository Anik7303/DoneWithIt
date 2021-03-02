const express = require('express')

const { login, register } = require('../controllers')

const router = express.Router()

router.post('/auth', login)

router.post('/user', register)

module.exports = router
