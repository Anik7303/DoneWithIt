const { Expo } = require('expo-server-sdk')

const { generateError } = require('../utility')

exports.sentPushNotification = async (
    pushToken,
    title,
    message,
    extraData = {}
) => {
    if (!Expo.isExpoPushToken(pushToken))
        throw generateError(400, `Push token ${pushToken} is not valid`)

    let expo = new Expo()

    const notification = {
        to: pushToken,
        title,
        body: message,
        data: extraData,
    }

    let tickets = await expo.sendPushNotificationsAsync([notification])
    console.log({ tickets, message })
}
