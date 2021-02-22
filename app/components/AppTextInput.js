import React from "react"
import { View, TextInput, StyleSheet } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"

import colors from "../config/colors"
import defaultStyles from "../config/styles"

const AppTextInput = ({
    style,
    icon,
    iconStyle,
    placeholder,
    value,
    onChangeText,
    ...otherProps
}) => {
    return (
        <View style={styles.container}>
            {icon && (
                <MaterialCommunityIcons
                    name={icon}
                    style={[styles.icon, iconStyle]}
                />
            )}
            <TextInput
                style={[styles.text, style]}
                value={value}
                placeholder={placeholder}
                placeholderTextColor={defaultStyles.colors.medium}
                onChangeText={onChangeText}
                {...otherProps}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: colors.light,
        paddingHorizontal: 10,
        marginVertical: 6,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: "#ddd",
        overflow: "hidden",
    },
    icon: {
        fontSize: 20,
        marginRight: 10,
        color: colors.medium,
    },
    text: {
        ...defaultStyles.text,
        flex: 1,
        paddingVertical: 6,
    },
})

export default AppTextInput
