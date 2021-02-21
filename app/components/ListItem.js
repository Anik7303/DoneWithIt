import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import colors from "../config/colors";

const ListItem = ({ image, title, subTitle }) => {
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image} />
            <View style={styles.details}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subTitle}>{subTitle}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    details: {
        justifyContent: "center",
    },
    image: {
        height: 50,
        width: 50,
        borderRadius: 50,
        marginHorizontal: 10,
    },
    subTitle: {
        fontWeight: "300",
        color: colors.medium,
    },
    title: {
        fontSize: 16,
        fontWeight: "500",
    },
});

export default ListItem;
