const express = require('express')

const { requireAuth } = require('../middlewares')
const { sentPushNotification } = require('../services/pushNotifications')

const router = express.Router()

router.use(requireAuth)

router.post('/', async (req, res, next) => {
    try {
        const title = `${req.user.name} says`
        const message = 'This is a test message'
        await sentPushNotification(req.user.pushToken, title, message)
        res.status(200).json({ message: 'notification sent' })
    } catch (error) {
        next(error)
    }
})

module.exports = router
