import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";

export default function App() {
    return (
        <View
            style={{
                backgroundColor: "#fff",
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <View
                style={{
                    backgroundColor: "dodgerblue",
                    width: 100,
                    height: 100,
                    // top: 20,
                    // left: 20,
                    // position: "absolute",
                    // zIndex: 1,
                }}
            />
            <View
                style={{
                    backgroundColor: "yellowgreen",
                    width: 100,
                    height: 100,
                    bottom: 20,
                    // position: "absolute",
                    // top: 20,
                    // left: 20,
                }}
            />
            <View
                style={{
                    backgroundColor: "tomato",
                    width: 100,
                    height: 100,
                    // right: 20,
                }}
            />
        </View>
    );
}
