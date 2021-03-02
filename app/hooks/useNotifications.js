import { useEffect, useRef, useState } from "react"
import { Platform } from "react-native"
import * as Notifications from "expo-notifications"

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldPlaySound: true,
        shouldSetBadge: false,
        shouldShowAlert: true,
    }),
})

/**
 * Schedule local notification
 * @param {String} title notification title
 * @param {String} body notification body
 * @param {Object} data data for notification
 * @param {Number} triggerAfter notification push delay in seconds
 */
const scheduleLocalNotification = async (
    title,
    body,
    data,
    triggerAfter = 1
) => {
    await Notifications.scheduleNotificationAsync({
        content: { title, body, data },
        trigger: { seconds: triggerAfter },
    })
}

/**
 * Schedule push notification
 * @param {String} title notification title
 * @param {String} body notification body
 * @param {Object} data data for notification
 * @param {Number} triggerAfter notification push delay in seconds
 */
const schedulePushNotification = async (title, body, data, triggerAfter = 2) =>
    await Notifications.scheduleNotificationAsync({
        content: { title, body, data },
        trigger: { seconds: triggerAfter },
    })

/**
 * Returns expo push notification token
 */
const registerForPushNotificationsAsync = async () => {
    let token
    const { status: existingStatus } = await Notifications.getPermissionsAsync()
    let finalStatus = existingStatus
    if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync()
        finalStatus = status
    }
    if (finalStatus !== "granted")
        return alert("Failed to get push token for push notification!")

    token = (await Notifications.getExpoPushTokenAsync()).data

    if (Platform.OS === "android") {
        Notifications.setNotificationChannelAsync("default", {
            name: "default",
            importance: Notifications.AndroidImportance.DEFAULT,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: "#FC5C657C",
        })
    }

    return token
}

/**
 * Returns an object containing 'expoPushToken', 'notification', 'response' and 'schedulePushNotification'
 */
const useNotifications = () => {
    const [expoPushToken, setExpoPushToken] = useState(null)
    const [notification, setNotification] = useState(null)
    const [response, setResponse] = useState(null)
    const notificationListener = useRef(null)
    const responseListener = useRef(null)

    useEffect(() => {
        registerForPushNotificationsAsync().then((token) =>
            setExpoPushToken(token)
        )

        notificationListener.current = Notifications.addNotificationReceivedListener(
            (notification) => setNotification(notification)
        )

        responseListener.current = Notifications.addNotificationResponseReceivedListener(
            (response) => setResponse(response)
        )

        return () => {
            Notifications.removeNotificationSubscription(notificationListener)
            Notifications.removeNotificationSubscription(responseListener)
        }
    }, [])

    return {
        expoPushToken,
        notification,
        response,
        scheduleLocalNotification,
        schedulePushNotification,
    }
}

export default useNotifications
