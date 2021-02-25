import React from "react"
import { Image, StyleSheet, TouchableWithoutFeedback, View } from "react-native"

import colors from "../config/colors"
import Text from "./Text"

const Card = ({ image, onPress, title, subTitle }) => (
    <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.card}>
            <Image style={styles.image} source={image} />
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{title} </Text>
                <Text style={styles.subTitle}>{subTitle}</Text>
            </View>
        </View>
    </TouchableWithoutFeedback>
)

const styles = StyleSheet.create({
    card: {
        overflow: "hidden",
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
    },
    detailsContainer: {
        padding: 15,
    },
    image: {
        width: "100%",
        height: 200,
    },
    subTitle: {
        color: colors.secondary,
        fontWeight: "bold",
    },
    title: {
        marginBottom: 7,
    },
})

export default Card
