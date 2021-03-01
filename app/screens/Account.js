import React from "react"
import { StyleSheet, View } from "react-native"
import { FlatList } from "react-native-gesture-handler"

import Wrapper from "../components/Wrapper"
import ListItem from "../components/ListItem"
import Icon from "../components/Icon"
import colors from "../config/colors"
import ListItemSeparator from "../components/ListItemSeparator"
import Routes from "../navigation/routes"
import { useAuth } from "../hooks"

const list = [
    {
        id: "1",
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary,
        },
        targetScreen: Routes.LISTINGS,
    },
    {
        id: "2",
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary,
        },
        targetScreen: Routes.MESSAGES,
    },
]

const Account = ({ navigation }) => {
    const { user, logout } = useAuth()

    return (
        <Wrapper style={styles.wrapper}>
            <View style={styles.heading}>
                <ListItem
                    title={user.name}
                    description={user.email}
                    image={require("../assets/mosh.jpg")}
                />
            </View>
            <View>
                <FlatList
                    style={styles.list}
                    data={list}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <ListItem
                            title={item.title}
                            IconComponent={() => <Icon {...item.icon} />}
                            onPress={() =>
                                navigation.navigate(item.targetScreen)
                            }
                        />
                    )}
                    ItemSeparatorComponent={ListItemSeparator}
                />
            </View>
            <ListItem
                title="Logout"
                IconComponent={() => (
                    <Icon name="logout" backgroundColor={colors.yellow} />
                )}
                onPress={logout}
            />
        </Wrapper>
    )
}

const styles = StyleSheet.create({
    heading: {
        marginBottom: 30,
    },
    list: {
        marginBottom: 20,
    },
    wrapper: {
        backgroundColor: colors.light,
    },
})

export default Account
