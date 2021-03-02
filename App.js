import React, { useEffect, useState } from "react"
import AppLoading from "expo-app-loading"
import { StatusBar } from "expo-status-bar"
import { NavigationContainer } from "@react-navigation/native"

import { AuthNavigator, TabNavigator } from "./app/navigation"
import navigationTheme from "./app/navigation/theme"
import OfflineNotice from "./app/components/OfflineNotice"
import AuthContext from "./app/auth/context"
import authStorage from "./app/auth/storage"
import { navigationRef } from "./app/navigation/rootNavigation"

const App = () => {
    const [user, setUser] = useState(null)
    const [isReady, setIsReady] = useState(false)

    useEffect(() => {
        const checkAuthStatus = async () => {
            const user = await authStorage.getUser()
            setUser(user)
        }
        if (!user && !isReady) {
            checkAuthStatus()
            setIsReady(true)
        }
    }, [user])

    if (!isReady) return <AppLoading />

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            <StatusBar style={"auto"} />
            <NavigationContainer ref={navigationRef} theme={navigationTheme}>
                {user ? <TabNavigator /> : <AuthNavigator />}
            </NavigationContainer>
            <OfflineNotice />
        </AuthContext.Provider>
    )
}

export default App
