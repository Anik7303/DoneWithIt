const { sentPushNotification } = require('../services/pushNotifications')

exports.sendNotification = async (req, res, next) => {
    try {
        const { title, body } = req.body
        const messageTitle = title || `${req.user.name} says`
        const messageBody = body || 'This is a test message'
        await sentPushNotification(
            req.user.pushToken,
            messageTitle,
            messageBody
        )
        res.status(200).json({ message: 'notification sent' })
    } catch (error) {
        next(error)
    }
}
