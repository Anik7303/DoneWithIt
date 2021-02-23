import React from "react"
import { StyleSheet } from "react-native"
import { TouchableOpacity } from "react-native"

import AppText from "./AppText"

const PickerItem = ({ item, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <AppText style={styles.text}>{item.label}</AppText>
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
