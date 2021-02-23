import React from "react"
import {
    StyleSheet,
    Modal,
    Text,
    FlatList,
    TouchableWithoutFeedback,
} from "react-native"

import defaultStyles from "../config/styles"

const AppModal = ({
    data,
    isVisible,
    ItemSeparatorComponent,
    keyExtractor,
    numOfColumns = 1,
    onClose,
    renderItem,
    ...otherListProps
}) => {
    return (
        <Modal visible={isVisible} animationType="slide">
            <TouchableWithoutFeedback onPress={onClose}>
                <Text style={styles.closeText}>Close</Text>
            </TouchableWithoutFeedback>
            <FlatList
                style={styles.list}
                data={data}
                keyExtractor={keyExtractor}
                numColumns={numOfColumns}
                renderItem={renderItem}
                ItemSeparatorComponent={ItemSeparatorComponent}
                {...otherListProps}
            />
        </Modal>
    )
}

const styles = StyleSheet.create({
    closeText: {
        ...defaultStyles.text,
        textAlign: "center",
        color: defaultStyles.colors.danger,
        marginVertical: 6,
    },
    list: {
        flex: 1,
    },
})

export default AppModal
