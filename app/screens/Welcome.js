import React from "react"
import {
    Image,
    ImageBackground,
    Platform,
    StyleSheet,
    Text,
    View,
} from "react-native"

import Button from "../components/Button"

export default function Welcome() {
    return (
        <ImageBackground
            blurRadius={Platform.OS === "android" ? 2 : 10}
            style={styles.background}
            source={require("../assets/background.jpg")}
        >
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require("../assets/logo-red.png")}
                />
                <Text style={styles.tagline}>Sell What You Don't Need</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Login" color="primary" />
                <Button title="Register" color="secondary" />
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    buttonContainer: {
        width: "100%",
        padding: 15,
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center",
    },
    tagline: {
        fontWeight: "bold",
        fontSize: 25,
        paddingVertical: 20,
    },
})
