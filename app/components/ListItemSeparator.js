import React from "react"
import { StyleSheet, View } from "react-native"

import colors from "../config/colors"

const ListItemSeparator = ({ style }) => (
    <View style={[styles.separator, style]} />
)

const styles = StyleSheet.create({
    separator: {
        width: "100%",
        height: 1,
        backgroundColor: colors.light,
    },
})

export default ListItemSeparator
