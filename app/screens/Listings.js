import React from "react"
import { StyleSheet, FlatList } from "react-native"

import colors from "../config/colors"
import Card from "../components/Card"
import Routes from "../navigation/routes"
import Wrapper from "../components/Wrapper"

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

const Listings = ({ navigation }) => {
    return (
        <Wrapper style={styles.container}>
            <FlatList
                data={listData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Card
                        image={item.image}
                        onPress={() =>
                            navigation.navigate(Routes.LISTING_DETAILS, item)
                        }
                        title={item.title}
                        subTitle={item.price}
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
