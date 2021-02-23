import React from "react"
import { Text } from "react-native"

import defaultStyles from "../config/styles"

const AppText = ({ children, style, numberOfLines = 1 }) => {
    return (
        <Text style={[defaultStyles.text, style]} numberOfLines={numberOfLines}>
            {children}
        </Text>
    )
}

export default AppText
