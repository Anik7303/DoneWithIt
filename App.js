import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

export default function App() {
    return (
        <View style={{ flex: 1, justifyContent: "space-between" }}>
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 15,
                }}
            >
                <Text
                    style={{
                        fontSize: 30,
                        fontFamily:
                            Platform.OS === "android" ? "Roboto" : "Courier",
                        fontWeight: "700",
                        fontStyle: "italic",
                        color: "tomato",
                        textTransform: "capitalize",
                        textDecorationLine: "line-through",
                        // textDecorationStyle: "dotted", //ios only
                        // textDecorationColor: "black", // ios only
                        lineHeight: 35,
                    }}
                >
                    I love React Native! This is my first app created with react
                    native. And i am loving it very much.
                </Text>
            </View>
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
                        padding: 20,
                        // marginBottom: 10,
                    }}
                >
                    <View
                        style={{
                            width: 50,
                            height: 50,
                            backgroundColor: "gold",
                            margin: 5,
                        }}
                    ></View>
                </View>
                <View
                    style={{
                        width: 100,
                        height: 100,
                        backgroundColor: "yellowgreen",
                        marginTop: 10,
                    }}
                ></View>
            </View>
        </View>
    );
}
