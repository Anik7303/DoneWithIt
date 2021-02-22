import React, { useState } from "react"
import { StyleSheet, FlatList } from "react-native"

import ListItem from "../components/ListItem"
import Wrapper from "../components/Wrapper"
import ListItemSeparator from "../components/ListItemSeparator"
import ListItemDeleteAction from "../components/ListItemDeleteAction"

const initialMessages = [
    {
        id: 1,
        title: "T1",
        description: "D1",
        image: require("../assets/mosh.jpg"),
    },
    {
        id: 2,
        title: "T2",
        description: "D2",
        image: require("../assets/mosh.jpg"),
    },
]

const MessagesScreen = () => {
    const [messages, setMessages] = useState(initialMessages)
    const [refreshing, setRefreshing] = useState(false)

    const handlePress = (message) => {
        console.log({ message })
    }

    const handleDelete = (message) => {
        setMessages((value) =>
            value.filter((element) => element.id !== message.id)
        )
    }

    return (
        <Wrapper>
            <FlatList
                style={styles.list}
                data={messages}
                keyExtractor={(message) => message.id.toString()}
                renderItem={({ item }) => (
                    <ListItem
                        title={item.title}
                        description={item.description}
                        image={item.image}
                        onPress={() => handlePress(item)}
                        renderRightActions={() => (
                            <ListItemDeleteAction
                                onPress={() => handleDelete(item)}
                            />
                        )}
                    />
                )}
                ItemSeparatorComponent={ListItemSeparator}
                // extraData={messages}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages(initialMessages)
                    // setRefreshing(true)
                    // setTimeout(() => {
                    //     setMessages(initialMessages)
                    //     setRefreshing(false)
                    // }, 2000)
                }}
            />
        </Wrapper>
    )
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
    },
})

export default MessagesScreen
