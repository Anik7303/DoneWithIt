import React from "react"
import { StyleSheet, Modal, View } from "react-native"
import * as Progress from "react-native-progress"
import LottieView from "lottie-react-native"

import colors from "../config/colors"

const UploadIndicator = ({ progress = 0, visible, onFinish }) => (
    <Modal visible={visible}>
        <View style={styles.container}>
            {progress < 1 ? (
                <Progress.Bar
                    color={colors.primary}
                    progress={progress}
                    width={200}
                />
            ) : (
                <LottieView
                    autoPlay
                    loop={false}
                    onAnimationFinish={onFinish}
                    source={require("../assets/animations/done1.json")}
                    style={styles.animation}
                />
            )}
        </View>
    </Modal>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    animation: {
        width: 150,
    },
})

export default UploadIndicator
