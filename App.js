import React from "react";
import { View, StyleSheet } from "react-native";

import WelcomeScreen from "./app/screens/Welcome";

export default function App() {
    return <WelcomeScreen />;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
    },
});
