import React from "react"
import { StyleSheet, Text, View, Image, TouchableHighlight } from "react-native"
import Swipable from "react-native-gesture-handler/Swipeable"

import colors from "../config/colors"

const ListItem = ({
    image,
    title,
    description,
    onPress,
    renderRightActions,
    IconComponent,
}) => (
    <Swipable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
            <View style={styles.container}>
                {IconComponent && <IconComponent />}
                {image && <Image source={image} style={styles.image} />}
                <View style={styles.details}>
                    <Text numberOfLines={1} style={styles.title}>
                        {title}
                    </Text>
                    {description && (
                        <Text numberOfLines={1} style={styles.description}>
                            {description}
                        </Text>
                    )}
                </View>
            </View>
        </TouchableHighlight>
    </Swipable>
)

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: colors.white,
        padding: 15,
    },
    description: {
        fontWeight: "300",
        color: colors.medium,
    },
    details: {
        justifyContent: "center",
        marginLeft: 10,
    },
    image: {
        height: 50,
        width: 50,
        borderRadius: 50,
    },
    title: {
        fontSize: 16,
        fontWeight: "500",
    },
})

export default ListItem
