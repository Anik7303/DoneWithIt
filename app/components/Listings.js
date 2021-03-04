import React from "react"
import { StyleSheet, FlatList } from "react-native"
import { useNavigation } from "@react-navigation/native"

import ActivityIndicator from "./ActivityIndicator"
import Card from "./Card"
import colors from "../config/colors"
import Routes from "../navigation/routes"
import Wrapper from "./Wrapper"
import DataLoadingError from "./DataLoadingError"

const Listings = ({
    data,
    error,
    loading,
    onRefresh,
    itemNavigationRoute = Routes.LISTING_DETAILS,
}) => {
    const navigation = useNavigation()

    return (
        <>
            <ActivityIndicator visible={loading} />
            <Wrapper style={styles.container}>
                <DataLoadingError
                    visible={error}
                    onPress={onRefresh}
                    text="Couldn't retrieve the listings."
                />
                <FlatList
                    data={data}
                    keyExtractor={(item) => item._id}
                    renderItem={({ item }) => (
                        <Card
                            imageUrl={item.images[0].url}
                            onPress={() =>
                                navigation.navigate(itemNavigationRoute, item)
                            }
                            thumbnailUrl={item.images[0].thumbnail}
                            title={item.title}
                            subTitle={item.price}
                        />
                    )}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    refreshing={loading}
                    onRefresh={() => onRefresh()}
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
