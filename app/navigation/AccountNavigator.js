import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import AccountScreen from "../screens/Account"
import Routes from "./routes"
import MessagesScreen from "../screens/Messages"

const Stack = createStackNavigator()

const AccountNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen
            name={Routes.ACCOUNT}
            component={AccountScreen}
            options={{ headerShown: false }}
        />
        <Stack.Screen name={Routes.MESSAGES} component={MessagesScreen} />
    </Stack.Navigator>
)

export default AccountNavigator
