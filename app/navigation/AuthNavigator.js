import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import routes from "./routes"
import LoginScreen from "../screens/Login"
import RegisterScreen from "../screens/Register"
import WelcomeScreen from "../screens/Welcome"

const Stack = createStackNavigator()

const AuthNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{ headerShown: false }}
        />
        <Stack.Screen name={routes.LOGIN} component={LoginScreen} />
        <Stack.Screen name={routes.REGISTER} component={RegisterScreen} />
    </Stack.Navigator>
)

export default AuthNavigator
