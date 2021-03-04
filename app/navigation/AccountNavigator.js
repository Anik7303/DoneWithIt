import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import AccountScreen from "../screens/Account"
import Routes from "./routes"
import MessagesScreen from "../screens/Messages"
import ListingsScreen from "../screens/Listings"
import ListingDetailsScreen from "../screens/ListingDetails"

const Stack = createStackNavigator()

const AccountNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen
            name={Routes.ACCOUNT}
            component={AccountScreen}
            options={{ headerShown: false }}
        />
        <Stack.Screen
            name={Routes.MESSAGES}
            component={MessagesScreen}
            options={{ title: "Messages" }}
        />
        <Stack.Screen
            name={Routes.USER_LISTINGS}
            component={ListingsScreen}
            options={{ title: "Your Listings" }}
        />
        <Stack.Screen
            name={Routes.USER_LISTING_DETAILS}
            component={ListingDetailsScreen}
            options={({ route }) => ({
                headerShown: Platform.OS === "android" ? true : false,
                title: route.params.title,
            })}
        />
    </Stack.Navigator>
)

export default AccountNavigator
