import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./app/components/AppText";

export default function App() {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons
                name="email"
                size={60}
                color="greenyellow"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
    },
});
