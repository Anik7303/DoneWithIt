import React, { useEffect } from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import * as Notifications from "expo-notifications"
import * as Permissions from "expo-permissions"

import AccountNavigator from "./AccountNavigator"
import FeedNavigator from "./FeedNavigator"
import ListingEditScreen from "../screens/ListingEdit"
import TabActionButton from "./TabActionButton"
import Routes from "./routes"
import pushTokenApi from "../api/expoPushToken"

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
    const registerForPushNotifications = async () => {
        try {
            const permission = await Permissions.askAsync(
                Permissions.NOTIFICATIONS
            )
            if (!permission.granted) return

            const token = await Notifications.getExpoPushTokenAsync()
            pushTokenApi.register(token.data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        registerForPushNotifications()
        const notificationReceivedSubscription = Notifications.addNotificationReceivedListener(
            (notification) => console.log({ notification })
        )
        const notificationResponseSubscription = Notifications.addNotificationResponseReceivedListener(
            (response) => console.log({ notificationResponse: response })
        )

        return () => {
            Notifications.removeNotificationSubscription(
                notificationReceivedSubscription
            )
            Notifications.removeNotificationSubscription(
                notificationResponseSubscription
            )
        }
    }, [])

    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Feed"
                component={FeedNavigator}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <MaterialCommunityIcons
                            name="home"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="ListingEdit"
                component={ListingEditScreen}
                options={({ navigation }) => ({
                    tabBarButton: () => (
                        <TabActionButton
                            onPress={() =>
                                navigation.navigate(Routes.LISTING_EDIT)
                            }
                        />
                    ),
                })}
            />
            <Tab.Screen
                name="Account"
                component={AccountNavigator}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <MaterialCommunityIcons
                            name="account"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}
export default TabNavigator
