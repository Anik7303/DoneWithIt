import React from "react"
import { View, TextInput, StyleSheet } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"

import colors from "../config/colors"
import defaultStyles from "../config/styles"

const AppTextInput = ({
    style,
    icon,
    iconStyle,
    onChangeText,
    placeholder,
    value,
    width = "100%",
    ...otherProps
}) => {
    return (
        <View style={[styles.container, { width }]}>
            {icon && (
                <MaterialCommunityIcons
                    name={icon}
                    style={[styles.icon, iconStyle]}
                />
            )}
            <TextInput
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor={defaultStyles.colors.medium}
                style={[styles.text, style]}
                value={value}
                {...otherProps}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        ...defaultStyles.formField,
        flexDirection: "row",
        paddingHorizontal: 10,
    },
    icon: {
        color: colors.medium,
        fontSize: 20,
        marginRight: 10,
    },
    text: {
        ...defaultStyles.text,
        flex: 1,
        paddingVertical: 6,
    },
})

export default AppTextInput
