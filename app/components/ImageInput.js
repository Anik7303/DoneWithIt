import React, { useEffect } from "react"
import {
    Alert,
    Image,
    StyleSheet,
    TouchableWithoutFeedback,
    View,
} from "react-native"
import * as ImagePicker from "expo-image-picker"
import { MaterialCommunityIcons } from "@expo/vector-icons"

import defaultStyles from "../config/styles"

const ImageInput = ({ image, onImageChange, size = 100 }) => {
    useEffect(() => {
        const requestPermission = async () => {
            const {
                granted,
            } = await ImagePicker.requestMediaLibraryPermissionsAsync()
            if (!granted)
                alert("Please grant access permission for media library")
        }
        requestPermission()
    }, [])

    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 0.5,
            })
            if (!result.cancelled) onImageChange(result.uri)
        } catch (error) {
            console.error({ ImageError: error })
        }
    }

    const handlePress = () => {
        if (!image) {
            selectImage()
        } else {
            Alert.alert(
                "Delete",
                "Are you sure you want to delete this image?",
                [
                    { text: "Yes", onPress: () => onImageChange(null) },
                    { text: "No" },
                ]
            )
        }
    }

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={[styles.container, { height: size, width: size }]}>
                {image ? (
                    <Image source={{ uri: image }} style={styles.image} />
                ) : (
                    <MaterialCommunityIcons name="camera" style={styles.icon} />
                )}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        ...defaultStyles.formField,
        borderRadius: 15,
        justifyContent: "center",
    },
    icon: {
        fontSize: 40,
        color: defaultStyles.colors.medium,
    },
    image: {
        height: "100%",
        width: "100%",
    },
})

export default ImageInput
