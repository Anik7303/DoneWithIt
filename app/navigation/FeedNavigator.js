import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import ListingsScreen from "../screens/Listings"
import ListingDetailsScreen from "../screens/ListingDetails"
import Routes from "./routes"
import { Platform } from "react-native"

const Stack = createStackNavigator()

const FeedNavigator = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }} mode="modal">
        <Stack.Screen name={Routes.LISTINGS} component={ListingsScreen} />
        <Stack.Screen
            name={Routes.LISTING_DETAILS}
            component={ListingDetailsScreen}
            options={({ route }) => ({
                headerShown: Platform.OS === "android" ? true : false,
                title: route.params.title,
            })}
        />
    </Stack.Navigator>
)

export default FeedNavigator
