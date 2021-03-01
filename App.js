import React from "react"
import { StatusBar } from "expo-status-bar"
import { NavigationContainer } from "@react-navigation/native"

import { AuthNavigator, TabNavigator } from "./app/navigation"
import navigationTheme from "./app/navigation/theme"
import OfflineNotice from "./app/components/OfflineNotice"

const App = () => (
    <>
        <StatusBar style={"auto"} />
        <NavigationContainer theme={navigationTheme}>
            <TabNavigator />
        </NavigationContainer>
        <OfflineNotice />
    </>
)

export default App
