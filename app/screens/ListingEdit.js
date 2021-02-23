import React from "react"
import { StyleSheet } from "react-native"
import * as Yup from "yup"

import {
    AppForm,
    AppFormField as FormField,
    AppFormPicker as Picker,
    SubmitButton,
} from "../components/forms"
import CategoryPickerItem from "../components/CategoryPickerItem"
import Wrapper from "../components/Wrapper"

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    category: Yup.object().required().nullable().label("Category"),
    description: Yup.string().label("Description"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
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
    const handleSubmit = (values) => {
        console.log({ values })
    }
    return (
        <Wrapper style={styles.container}>
            <AppForm
                initialValues={{
                    title: "",
                    category: null,
                    description: "",
                    price: "",
                }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
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
            </AppForm>
        </Wrapper>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
})

export default ListingEdit
