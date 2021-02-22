import React from "react"
import { StyleSheet } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"

import colors from "../config/colors"
import { TouchableWithoutFeedback } from "react-native-gesture-handler"

const ListItemDeleteAction = ({ onPress }) => {
    return (
        <TouchableWithoutFeedback style={styles.container} onPress={onPress}>
            <MaterialCommunityIcons
                name="trash-can-outline"
                color="white"
                style={styles.icon}
            />
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.danger,
        width: 70,
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    icon: {
        fontSize: 30,
        color: colors.white,
    },
})

export default ListItemDeleteAction
