import React from "react"
import { Image, StyleSheet } from "react-native"
import * as Yup from "yup"

import Wrapper from "../components/Wrapper"
import { AppForm, AppFormField, SubmitButton } from "../components/forms"

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
})

const Login = () => {
    const handleLogin = ({ email, password }) => {
        console.log({ email, password })
    }

    return (
        <Wrapper style={styles.container}>
            <Image
                source={require("../assets/logo-red.png")}
                style={styles.logo}
            />
            <AppForm
                initialValues={{ email: "", password: "" }}
                onSubmit={handleLogin}
                validationSchema={validationSchema}
            >
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    keyboardType="email-address"
                    name="email"
                    placeholder="Email"
                    textContentType="emailAddress"
                />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="password"
                    placeholder="Password"
                    secureTextEntry
                    textContentType="password"
                />
                <SubmitButton title="Login" />
            </AppForm>
        </Wrapper>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 30,
    },
})

export default Login
