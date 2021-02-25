import React from "react"
import { StyleSheet, TouchableHighlight } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"

import colors from "../config/colors"

const TabActionButton = ({ onPress }) => {
    return (
        <TouchableHighlight
            onPress={onPress}
            style={styles.container}
            underlayColor={colors.medium}
        >
            <MaterialCommunityIcons name="plus-circle" style={styles.icon} />
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: colors.primary,
        borderColor: colors.white,
        borderWidth: 6,
        borderRadius: 40,
        bottom: 30,
        height: 80,
        justifyContent: "center",
        width: 80,
    },
    icon: {
        fontSize: 45,
        color: colors.white,
    },
})

export default TabActionButton
