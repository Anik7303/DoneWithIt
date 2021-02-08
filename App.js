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
                    // shadow.. only works for ios
                    shadowColor: "grey",
                    shadowOffset: {
                        width: 10,
                        height: 10,
                    },
                    shadowOpacity: 1,
                    // shadow's replacement in android is elevation
                    elevation: 15,
                }}
            ></View>
        </View>
    );
}
