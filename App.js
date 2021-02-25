import React from "react"
import { NavigationContainer, useNavigation } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Button, Text, View } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"

import AccountScreen from "./app/screens/Account"
import ListingDetailsScreen from "./app/screens/ListingDetails"
import ListingEditScreen from "./app/screens/ListingEdit"
import ListingsScreen from "./app/screens/Listings"
import LoginScreen from "./app/screens/Login"
import MessagesScreen from "./app/screens/Messages"
import WelcomeScreen from "./app/screens/Welcome"
import Wrapper from "./app/components/Wrapper"
import Icon from "./app/components/Icon"

const Link = () => {
    const navigation = useNavigation()
    return (
        <Button title="Click" onPress={() => navigation.navigate("Tweets")} />
    )
}

const Tweets = ({ navigation }) => (
    <Wrapper>
        <Text>Tweets</Text>
        <Button
            title="View Tweet"
            onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
        />
    </Wrapper>
)

const TweetDetails = ({ route }) => (
    <Wrapper>
        <Text>Tweet Details {route.params.id}</Text>
        <Link />
    </Wrapper>
)

const Stack = createStackNavigator()

const FeedNavigator = () => (
    <Stack.Navigator
        initialRouteName="Tweets"
        screenOptions={{ headerShown: false }}
    >
        <Stack.Screen name="Tweets" component={Tweets} />
        <Stack.Screen
            name="TweetDetails"
            component={TweetDetails}
            options={({ route }) => ({ title: route.params.id })}
        />
    </Stack.Navigator>
)

const Tab = createBottomTabNavigator()

const Account = () => (
    <Wrapper>
        <Text>Account Screen</Text>
    </Wrapper>
)

const TabNavigator = () => (
    <Tab.Navigator
        tabBarOptions={{
            activeBackgroundColor: "tomato",
            activeTintColor: "white",
            inactiveBackgroundColor: "#eee",
            inactiveTintColor: "black",
        }}
    >
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
            name="Account"
            component={Account}
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

export default function App() {
    return (
        <NavigationContainer>
            <TabNavigator />
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
