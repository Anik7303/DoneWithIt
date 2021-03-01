import React from "react"
import { useEffect, useState } from "react"
import { StyleSheet, View, Text, Button } from "react-native"
import Constants from "expo-constants"
// import AsyncStorage from "@react-native-async-storage/async-storage"
import { useAsyncStorage } from "@react-native-async-storage/async-storage"

const App = () => {
    const { getItem, setItem } = useAsyncStorage("person")
    const [person, setPerson] = useState(null)

    const getPerson = async () => {
        const item = await getItem()
        setPerson(JSON.parse(item))
    }

    const updatePerson = async (newPerson) => {
        await setItem(JSON.stringify(newPerson))
        setPerson(newPerson)
    }

    useEffect(() => {
        getPerson()
    }, [getPerson])

    // const [person, setPerson] = useState(null)

    // const demo = async () => {
    //     await AsyncStorage.setItem("person", JSON.stringify({ id: 1 }))
    //     const person = await AsyncStorage.getItem("person")
    //     console.log({ person })
    // }

    // useEffect(() => {
    //     demo()
    // }, [demo])

    return (
        <View style={styles.container}>
            <Text>Person id: {person?.id}</Text>
            <Button
                title="Update"
                onPress={() =>
                    updatePerson({ id: Math.floor(Math.random() * 100) })
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
})

export default App
