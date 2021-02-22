import React from "react"
import { StyleSheet, FlatList } from "react-native"

import Wrapper from "../components/Wrapper"
import Card from "../components/Card"
import colors from "../config/colors"

const listData = [
    {
        id: "1",
        title: "Red jacket for sale",
        price: "$100",
        image: require("../assets/jacket.jpg"),
    },
    {
        id: "2",
        title: "Couch in great condition",
        price: "$1000",
        image: require("../assets/couch.jpg"),
    },
]

const Listings = () => {
    return (
        <Wrapper style={styles.container}>
            <FlatList
                data={listData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Card
                        title={item.title}
                        subTitle={item.price}
                        image={item.image}
                    />
                )}
            />
        </Wrapper>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        backgroundColor: colors.light,
    },
})
export default Listings
