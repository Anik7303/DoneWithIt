import React from "react"
import { StyleSheet, Text, View, Image, TouchableHighlight } from "react-native"
import Swipable from "react-native-gesture-handler/Swipeable"
import { MaterialCommunityIcons } from "@expo/vector-icons"

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
                        <Text numberOfLines={2} style={styles.description}>
                            {description}
                        </Text>
                    )}
                </View>
                <MaterialCommunityIcons
                    name="chevron-right"
                    size={24}
                    color={colors.medium}
                />
            </View>
        </TouchableHighlight>
    </Swipable>
)

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: colors.white,
        padding: 15,
        alignItems: "center",
    },
    description: {
        fontWeight: "300",
        color: colors.medium,
    },
    details: {
        justifyContent: "center",
        marginLeft: 10,
        flex: 1,
    },
    image: {
        height: 50,
        width: 50,
        borderRadius: 50,
    },
    title: {
        fontSize: 16,
        fontWeight: "600",
    },
})

export default ListItem
