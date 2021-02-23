import React from "react"
import { Image, StyleSheet, View } from "react-native"

import Text from "../components/Text"
import ListItem from "../components/ListItem"
import colors from "../config/colors"

const ListingDetails = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require("../assets/jacket.jpg")}
            />
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>Red jacket for sale</Text>
                <Text style={styles.price}>$100</Text>
            </View>
            <View style={styles.userContainer}>
                <ListItem
                    image={require("../assets/mosh.jpg")}
                    title="Mosh Hamedani"
                    description="5 listings"
                />
            </View>
        </View>
    )
}

export default ListingDetails

const styles = StyleSheet.create({
    container: {},
    detailsContainer: {
        paddingHorizontal: 15,
        paddingVertical: 20,
    },
    image: {
        width: "100%",
        height: 300,
    },
    price: {
        color: colors.secondary,
        fontSize: 18,
    },
    title: {
        fontSize: 24,
        fontWeight: "300",
        marginBottom: 6,
    },
    userContainer: {
        marginTop: 30,
        paddingLeft: 5,
    },
})
