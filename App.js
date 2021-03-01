import React from "react"
import { StatusBar } from "expo-status-bar"
import { NavigationContainer } from "@react-navigation/native"

import { AuthNavigator, TabNavigator } from "./app/navigation"
import navigationTheme from "./app/navigation/theme"

const App = () => (
    <>
        <StatusBar style={"auto"} />
        <NavigationContainer theme={navigationTheme}>
            <TabNavigator />
        </NavigationContainer>
    </>
)

export default App
