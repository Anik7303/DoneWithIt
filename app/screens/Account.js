import React from "react"
import { StyleSheet, View } from "react-native"
import { FlatList } from "react-native-gesture-handler"

import Wrapper from "../components/Wrapper"
import ListItem from "../components/ListItem"
import Icon from "../components/Icon"
import colors from "../config/colors"
import ListItemSeparator from "../components/ListItemSeparator"

const list = [
    {
        id: "1",
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary,
        },
    },
    {
        id: "2",
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary,
        },
    },
]

const Account = () => {
    const handleLogout = () => {
        console.log("logout")
    }

    return (
        <Wrapper style={styles.wrapper}>
            <View style={styles.heading}>
                <ListItem
                    title="Mosh Hamedani"
                    description="programmingwithmosh@gmail.com"
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
                            onPress={() => console.log({ item })}
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
                onPress={handleLogout}
            />
        </Wrapper>
    )
}

const border = {
    borderWidth: 1,
    borderColor: "black",
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
