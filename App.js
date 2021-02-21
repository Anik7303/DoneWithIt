import React from "react";
import { View } from "react-native";
import Card from "./app/components/Card";

export default function App() {
    return (
        <View style={{ padding: 20, paddingTop: 100 }}>
            <Card
                image={require("./app/assets/jacket.jpg")}
                title="Red jacket for sale"
                subTitle="$100"
            />
        </View>
    );
}
