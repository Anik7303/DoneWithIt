import React from "react";
import { StyleSheet, View, Image } from "react-native";

import colors from "../config/colors";

export default function ViewImage() {
    return (
        <View style={styles.container}>
            <View style={styles.actionIconContainer}>
                <View style={styles.deleteIcon}></View>
                <View style={styles.closeIcon}></View>
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
        width: 50,
        height: 50,
        backgroundColor: colors.primary,
        position: "absolute",
        top: 40,
        left: 30,
    },
    container: {
        flex: 1,
        backgroundColor: colors.black,
    },
    deleteIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.secondary,
        position: "absolute",
        top: 40,
        right: 30,
    },
    image: {
        width: "100%",
        height: "100%",
    },
    imageContainer: {},
});
