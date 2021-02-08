import { StatusBar } from "expo-status-bar";
import React from "react";
import ViewImage from "./app/screens/ViewImage";
import WelcomeScreen from "./app/screens/Welcome";

export default function App() {
    return (
        <>
            <StatusBar style="auto" />
            {/* <WelcomeScreen /> */}
            <ViewImage />
        </>
    );
}
