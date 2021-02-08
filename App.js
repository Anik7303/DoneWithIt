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
                alignContent: "center",
                flexWrap: "wrap",
            }}
        >
            <View
                style={{
                    backgroundColor: "dodgerblue",
                    width: 100,
                    height: 100,
                    // alignSelf: "flex-start",
                    // flexBasis: 150,
                    // flex: 1,
                    // flexGrow: 1,
                    // flexShrink: 1,
                    top: 20,
                }}
            />
            <View
                style={{
                    backgroundColor: "yellowgreen",
                    width: 100,
                    height: 150,
                    // flex: 1,
                    // flexGrow: 1,
                }}
            />
            <View
                style={{
                    backgroundColor: "tomato",
                    width: 100,
                    height: 200,
                }}
            />
            <View
                style={{
                    backgroundColor: "gold",
                    width: 100,
                    height: 150,
                }}
            />
            <View
                style={{
                    backgroundColor: "grey",
                    width: 100,
                    height: 100,
                }}
            />
        </View>
    );
}
