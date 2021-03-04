import React from "react"
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    View,
} from "react-native"
import { Image } from "react-native-expo-image-cache"
import * as Yup from "yup"

import messagesApi from "../api/messages"
import colors from "../config/colors"
import { Form, FormField, SubmitButton } from "../components/forms"
import ListItem from "../components/ListItem"
import Text from "../components/Text"
import { useNotifications } from "../hooks"

const validationSchema = Yup.object().shape({
    message: Yup.string().required().min(1).label("Message"),
})

const ListingDetails = ({ route }) => {
    const { _id, images, title, price } = route.params

    const { scheduleLocalNotification } = useNotifications()

    const handleMessageSubmit = async ({ message }, { resetForm }) => {
        try {
            Keyboard.dismiss()

            const result = await messagesApi.sendMessage({
                message,
                listingId: _id,
            })
            if (!result.ok) throw result.originalError

            scheduleLocalNotification("Info", "Message sent")

            resetForm()
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <KeyboardAvoidingView
            behavior="position"
            keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 120}
        >
            <View style={styles.container}>
                <Image
                    preview={{ uri: images[0].thumbnail }}
                    style={styles.image}
                    tint={"light"}
                    uri={images[0].url}
                />
                <View style={styles.detailsContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.price}>{price}</Text>
                </View>
                <View style={styles.userContainer}>
                    <ListItem
                        image={require("../assets/mosh.jpg")}
                        title="Mosh Hamedani"
                        description="5 listings"
                    />
                </View>
                <View style={styles.form}>
                    <Form
                        initialValues={{ message: "" }}
                        onSubmit={handleMessageSubmit}
                        validationSchema={validationSchema}
                    >
                        <FormField name="message" placeholder="Message..." />
                        <SubmitButton title="Contact Seller" />
                    </Form>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {},
    detailsContainer: {
        padding: 15,
    },
    form: {
        padding: 10,
    },
    image: {
        width: "100%",
        height: 280,
    },
    price: {
        color: colors.secondary,
        fontSize: 18,
    },
    title: {
        fontSize: 22,
        fontWeight: "300",
        marginBottom: 6,
    },
    userContainer: {
        marginTop: 5,
    },
})

export default ListingDetails
