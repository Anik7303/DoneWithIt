import React, { useState } from "react"
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"

import defaultStyles from "../config/styles"
import AppText from "./AppText"
import AppModal from "./AppModal"
import PickerItem from "./PickerItem"
import ListItemSeparator from "./ListItemSeparator"

const AppPicker = ({
    data,
    icon,
    iconStyle,
    placeholder,
    selectedItem,
    onItemSelect,
}) => {
    const [visible, setVisible] = useState(false)

    const handleModalClose = () => {
        setVisible(false)
    }

    const handleSelect = (item) => {
        onItemSelect(item)
        handleModalClose()
    }

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setVisible(true)}>
                <View style={styles.container}>
                    {icon && (
                        <MaterialCommunityIcons
                            name={icon}
                            style={[styles.icon, iconStyle]}
                        />
                    )}
                    {selectedItem ? (
                        <AppText style={styles.text}>
                            {selectedItem.label}
                        </AppText>
                    ) : (
                        <AppText style={styles.placeholder}>
                            {placeholder}
                        </AppText>
                    )}

                    <MaterialCommunityIcons
                        name="chevron-down"
                        style={[styles.icon, styles.rightIcon]}
                    />
                </View>
            </TouchableWithoutFeedback>
            <AppModal
                isVisible={visible}
                onClose={handleModalClose}
                data={data}
                keyExtractor={(item) => item.value.toString()}
                renderItem={({ item }) => (
                    <PickerItem
                        label={item.label}
                        onPress={() => handleSelect(item)}
                    />
                )}
                ItemSeparatorComponent={ListItemSeparator}
            />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: defaultStyles.colors.light,
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
        color: defaultStyles.colors.medium,
    },
    rightIcon: {
        marginRight: 0,
    },
    placeholder: {
        ...defaultStyles.text,
        flex: 1,
        paddingVertical: 10,
        color: defaultStyles.colors.medium,
    },
    text: {
        ...defaultStyles.text,
        flex: 1,
        paddingVertical: 10,
    },
})

export default AppPicker
