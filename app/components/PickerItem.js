import React from "react"
import { StyleSheet } from "react-native"
import { TouchableOpacity } from "react-native"

import Text from "./Text"

const PickerItem = ({ item, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.text}>{item.label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        width: "100%",
        padding: 10,
        textAlign: "center",
    },
})

export default PickerItem
