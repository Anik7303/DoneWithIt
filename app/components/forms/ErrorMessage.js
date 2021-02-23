import React from "react"
import { StyleSheet } from "react-native"

import colors from "../../config/colors"
import Text from "../Text"

const ErrorMessage = ({ error, visible }) => {
    if (!visible || !error) return null

    return <Text style={styles.error}>{error}</Text>
}

const styles = StyleSheet.create({
    error: {
        color: colors.danger,
    },
})

export default ErrorMessage
