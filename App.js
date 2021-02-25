import React from "react"
import { NavigationContainer, useNavigation } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import AccountScreen from "./app/screens/Account"
import ListingDetailsScreen from "./app/screens/ListingDetails"
import ListingEditScreen from "./app/screens/ListingEdit"
import ListingsScreen from "./app/screens/Listings"
import LoginScreen from "./app/screens/Login"
import MessagesScreen from "./app/screens/Messages"
import WelcomeScreen from "./app/screens/Welcome"
import { Button, Text, View } from "react-native"

const Link = () => {
    const navigation = useNavigation()
    return (
        <Button title="Click" onPress={() => navigation.navigate("Tweets")} />
    )
}

const Tweets = ({ navigation }) => (
    <View>
        <Text>Tweets</Text>
        <Button
            title="View Tweet"
            onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
        />
    </View>
)

const TweetDetails = ({ route }) => (
    <View>
        <Text>Tweet Details {route.params.id}</Text>
        <Link />
    </View>
)

const Stack = createStackNavigator()

const StackNavigator = () => (
    <Stack.Navigator
        initialRouteName="Tweets"
        screenOptions={{
            headerTintColor: "white",
            headerStyle: { backgroundColor: "dodgerblue" },
            headerShown: false,
        }}
    >
        <Stack.Screen
            name="Tweets"
            component={Tweets}
            options={{
                headerTintColor: "black",
                headerStyle: { backgroundColor: "tomato" },
                headerShown: true,
            }}
        />
        <Stack.Screen
            name="TweetDetails"
            component={TweetDetails}
            options={({ route }) => ({ title: route.params.id })}
        />
    </Stack.Navigator>
)

export default function App() {
    return (
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    )
    // return <AccountScreen />
    // return <ListingDetailsScreen />
    return <ListingEditScreen />
    // return <ListingsScreen />
    // return <LoginScreen />
    // return <MessagesScreen />
    return <WelcomeScreen />
}
