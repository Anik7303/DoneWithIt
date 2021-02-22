import React from "react"
import { View } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"

const Icon = ({
    name,
    size = 40,
    backgroundColor = "#000",
    iconColor = "white",
}) => {
    return (
        <View
            style={{
                width: size,
                height: size,
                borderRadius: size,
                backgroundColor,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <MaterialCommunityIcons
                name={name}
                size={size * 0.6}
                color={iconColor}
            />
        </View>
    )
}

export default Icon
