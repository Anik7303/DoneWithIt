import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <View
                style={{
                    backgroundColor: "dodgerblue",
                    width: 100,
                    height: 100,
                    borderWidth: 10,
                    borderColor: "royalblue",
                    borderRadius: 10,
                    borderTopRightRadius: 35,
                    borderBottomLeftRadius: 35,
                }}
            ></View>
        </View>
    );
}
