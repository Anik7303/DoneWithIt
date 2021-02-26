import React from "react"
import { StyleSheet } from "react-native"
import * as Yup from "yup"

import {
    Form,
    FormField,
    FormImagePicker,
    FormPicker as Picker,
    SubmitButton,
} from "../components/forms"
import CategoryPickerItem from "../components/CategoryPickerItem"
import Wrapper from "../components/Wrapper"
import { useLocation } from "../hooks"
import listingsApi from "../api/listings"

const validationSchema = Yup.object().shape({
    category: Yup.object().required().nullable().label("Category"),
    description: Yup.string().label("Description"),
    images: Yup.array().min(1, "Please select atleast one image"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    title: Yup.string().required().min(1).label("Title"),
})

const categories = [
    {
        label: "Furniture",
        value: 1,
        icon: "floor-lamp",
        backgroundColor: "red",
    },
    { label: "Cars", value: 2, icon: "car", backgroundColor: "green" },
    { label: "Cameras", value: 3, icon: "camera", backgroundColor: "blue" },
    { label: "Games", value: 4, icon: "cards-outline", backgroundColor: "red" },
    {
        label: "Clothing",
        value: 5,
        icon: "shoe-heel",
        backgroundColor: "green",
    },
    {
        label: "Sports",
        value: 6,
        icon: "basketball",
        backgroundColor: "blue",
    },
    {
        label: "Movies & Music",
        value: 7,
        icon: "music",
        backgroundColor: "red",
    },
    {
        label: "Books",
        value: 8,
        icon: "book-open-variant",
        backgroundColor: "green",
    },
    { label: "Others", value: 9, icon: "application", backgroundColor: "blue" },
]

const ListingEdit = () => {
    const [location] = useLocation()

    const handleSubmit = async (values) => {
        const result = await listingsApi.addListing(
            { ...values, location },
            (progress) =>
                console.log(
                    Math.round((progress.loaded / progress.total) * 100)
                )
        )
        console.log({ error: result.problem })
        if (!result.ok) return alert("Could not save the listing.")
        alert("Success")
    }

    return (
        <Wrapper style={styles.container}>
            <Form
                initialValues={{
                    category: null,
                    description: "",
                    images: [],
                    price: "",
                    title: "",
                }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <FormImagePicker name="images" />
                <FormField
                    autoCapitalize="sentences"
                    autoCorrect
                    placeholder="Title"
                    name="title"
                    maxLength={255}
                />
                <FormField
                    placeholder="Price"
                    name="price"
                    keyboardType="numeric"
                    maxLength={8}
                    width={120}
                />
                <Picker
                    data={categories}
                    name="category"
                    numOfColumns={3}
                    placeholder="Category"
                    PickerItemComponent={CategoryPickerItem}
                    width="50%"
                />
                <FormField
                    autoCapitalize="sentences"
                    autoCorrect
                    multiline
                    name="description"
                    numberOfLines={3}
                    placeholder="Description"
                />
                <SubmitButton title="Post" />
            </Form>
        </Wrapper>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
})

export default ListingEdit
