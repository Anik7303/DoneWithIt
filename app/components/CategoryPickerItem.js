import React from "react"
import { StyleSheet } from "react-native"
import { TouchableOpacity, View } from "react-native"

import AppText from "./AppText"
import Icon from "./Icon"

const PickerItem = ({ item, onPress }) => {
    return (
        <TouchableOpacity style={styles.wrapper} onPress={onPress}>
            <View style={styles.container}>
                <Icon
                    name={item.icon}
                    backgroundColor={item.backgroundColor}
                    size={80}
                />
                <AppText style={styles.text} numberOfLines={1}>
                    {item.label}
                </AppText>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: "6%",
        paddingVertical: "6%",
        alignItems: "center",
    },
    text: {
        marginTop: 6,
        textAlign: "center",
        flexWrap: "nowrap",
    },
    wrapper: {
        width: "33%",
    },
})

export default PickerItem
