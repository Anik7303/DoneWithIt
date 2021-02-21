import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

export default function ViewImage() {
    return (
        <View style={styles.container}>
            <View style={styles.actionIconContainer}>
                <MaterialCommunityIcons
                    name="trash-can-outline"
                    style={styles.deleteIcon}
                />
                <MaterialCommunityIcons name="close" style={styles.closeIcon} />
            </View>
            <Image
                style={styles.image}
                resizeMode="contain"
                source={require("../assets/chair.jpg")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    actionIconContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    closeIcon: {
        fontSize: 35,
        color: colors.primary,
        position: "absolute",
        top: 40,
        left: 30,
    },
    container: {
        flex: 1,
        backgroundColor: colors.black,
    },
    deleteIcon: {
        fontSize: 35,
        color: colors.secondary,
        position: "absolute",
        top: 40,
        right: 30,
    },
    image: {
        width: "100%",
        height: "100%",
    },
});
