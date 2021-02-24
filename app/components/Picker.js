import React, { useState } from "react"
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"

import defaultStyles from "../config/styles"
import ListItemSeparator from "./ListItemSeparator"
import Modal from "./Modal"
import PickerItem from "./PickerItem"
import Text from "./Text"

const AppPicker = ({
    data,
    icon,
    iconStyle,
    numOfColumns,
    onItemSelect,
    placeholder,
    PickerItemComponent = PickerItem,
    selectedItem,
    width = "100%",
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
                <View style={[styles.container, { width }]}>
                    {icon && (
                        <MaterialCommunityIcons
                            name={icon}
                            style={[styles.icon, iconStyle]}
                        />
                    )}
                    {selectedItem ? (
                        <Text style={styles.text}>{selectedItem.label}</Text>
                    ) : (
                        <Text style={styles.placeholder}>{placeholder}</Text>
                    )}

                    <MaterialCommunityIcons
                        name="chevron-down"
                        style={[styles.icon, styles.rightIcon]}
                    />
                </View>
            </TouchableWithoutFeedback>
            <Modal
                data={data}
                isVisible={visible}
                ItemSeparatorComponent={ListItemSeparator}
                keyExtractor={(item) => item.value.toString()}
                numOfColumns={numOfColumns}
                onClose={handleModalClose}
                renderItem={({ item }) => (
                    <PickerItemComponent
                        item={item}
                        onPress={() => handleSelect(item)}
                    />
                )}
            />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        ...defaultStyles.formField,
        flexDirection: "row",
        paddingHorizontal: 10,
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
