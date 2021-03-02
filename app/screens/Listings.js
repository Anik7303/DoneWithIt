import React, { useEffect } from "react"
import { StyleSheet, FlatList } from "react-native"

import ActivityIndicator from "../components/ActivityIndicator"
import Button from "../components/Button"
import colors from "../config/colors"
import Card from "../components/Card"
import { useApi } from "../hooks"
import listingsApi from "../api/listings"
import Routes from "../navigation/routes"
import Text from "../components/Text"
import Wrapper from "../components/Wrapper"

const Listings = ({ navigation }) => {
    const { data, error, loading, request } = useApi(listingsApi.getListings)

    useEffect(() => {
        request()
    }, [])

    return (
        <>
            <ActivityIndicator visible={loading} />
            <Wrapper style={styles.container}>
                {error && (
                    <>
                        <Text>Couldn't retrieve the listings.</Text>
                        <Button title="Retry" onPress={() => request()} />
                    </>
                )}
                <FlatList
                    data={data}
                    keyExtractor={(item) => item._id}
                    renderItem={({ item }) => (
                        <Card
                            imageUrl={item.images[0].url}
                            onPress={() =>
                                navigation.navigate(
                                    Routes.LISTING_DETAILS,
                                    item
                                )
                            }
                            thumbnailUrl={item.images[0].thumbnail}
                            title={item.title}
                            subTitle={item.price}
                        />
                    )}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    refreshing={loading}
                    onRefresh={() => request()}
                />
            </Wrapper>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        backgroundColor: colors.light,
    },
})
export default Listings
