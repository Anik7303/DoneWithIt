import { StatusBar } from "expo-status-bar";
import React from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    Image,
    View,
    TouchableWithoutFeedback,
    TouchableOpacity,
    TouchableHighlight,
    TouchableNativeFeedback,
    Button,
    Alert,
} from "react-native";

export default function App() {
    function handlePress() {
        console.log("Touchable pressed");
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.text}>Hello React Native!</Text>
            {/* <Image source={require("./assets/favicon.png")} /> */}
            {/* <TouchableHighlight onPress={handlePress}>
                <Image
                    // blurRadius={5}
                    fadeDuration={1000}
                    loadingIndicatorSource={require("./assets/favicon.png")}
                    source={{
                        width: 200,
                        height: 300,
                        uri: "https://picsum.photos/200/300",
                    }}
                />
            </TouchableHighlight> */}
            {/* <TouchableNativeFeedback
                onPress={() => console.log("view pressed")}
            >
                <View
                    style={{
                        width: 200,
                        height: 70,
                        backgroundColor: "dodgerblue",
                    }}
                ></View>
            </TouchableNativeFeedback> */}
            {/* <Button
                title="Click Me"
                color="orange"
                onPress={() => alert("button tapped")}
            />
            <Button
                title="using Alert.alert"
                onPress={() =>
                    Alert.alert("My title", "my message", [
                        { text: "yes", onPress: () => console.log("ok") },
                        { text: "no", onPress: () => console.log("no") },
                    ])
                }
            /> */}
            {/* Only works in IOS */}
            {/* <Button
                title="using Alert"
                onPress={() =>
                    Alert.prompt("My title", "my message", (text) =>
                        console.log(text)
                    )
                }
            /> */}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        backgroundColor: "#00f00f",
    },
});
