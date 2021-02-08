import { StatusBar } from "expo-status-bar";
import React from "react";
import {
    StyleSheet,
    Text,
    View,
    StatusBar as ReactNativeStatusBar,
    Platform,
    SafeAreaView,
} from "react-native";
import {
    useDimensions,
    useDeviceOrientation,
} from "@react-native-community/hooks";

export default function App() {
    const { landscape } = useDeviceOrientation();
    console.log({ landscape });
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.text}>Welcome to React Native with Expo</Text>
            <View
                style={{
                    backgroundColor: "red",
                    width: "100%",
                    height: landscape ? "100%" : "30%",
                }}
            ></View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        // alignItems: "center",
        // justifyContent: "center",
        paddingTop:
            Platform.OS === "android" ? ReactNativeStatusBar.currentHeight : 0,
    },
    text: {
        // width: 150,
        color: "dodgerblue",
    },
});
