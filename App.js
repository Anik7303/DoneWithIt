import React from "react"
import { NavigationContainer } from "@react-navigation/native"

import { AuthNavigator, TabNavigator } from "./app/navigation"
import navigationTheme from "./app/navigation/theme"

const App = () => (
    <NavigationContainer theme={navigationTheme}>
        <TabNavigator />
    </NavigationContainer>
)

export default App
