import React, { useState, useEffect } from "react"
import { StyleSheet, FlatList } from "react-native"

import colors from "../config/colors"
import Card from "../components/Card"
import Routes from "../navigation/routes"
import Wrapper from "../components/Wrapper"
import listingsApi from "../api/listings"
import { generateImageUrl } from "../utils"

const Listings = ({ navigation }) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    const request = async () => {
        const result = await listingsApi.getListings()
        if (result.ok) setData(result.data)
    }
    useEffect(() => {
        request()
    }, [])

    return (
        <Wrapper style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (
                    <Card
                        imageUrl={generateImageUrl(item.images[0])}
                        onPress={() =>
                            navigation.navigate(Routes.LISTING_DETAILS, item)
                        }
                        title={item.title}
                        subTitle={item.price}
                    />
                )}
                showsHorizontalScrollIndicator={false}
                refreshing={loading}
                onRefresh={() => request()}
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
