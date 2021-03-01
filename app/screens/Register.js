import React, { useState } from "react"
import { Image, StyleSheet } from "react-native"
import * as Yup from "yup"

import Wrapper from "../components/Wrapper"
import {
    ErrorMessage,
    Form,
    FormField,
    SubmitButton,
} from "../components/forms"
import authApi from "../api/auth"
import { useAuth } from "../hooks"

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    name: Yup.string().required().min(1).label("Name"),
    password: Yup.string().required().min(4).label("Password"),
})

const Register = () => {
    const [regError, setRegError] = useState(false)
    const auth = useAuth()

    const handleRegistration = async ({ email, name, password }) => {
        const response = await authApi.register(name, email, password)

        if (!response.ok) return setRegError(response.data.message)

        setRegError(null)
        auth.login(response.data)
    }

    return (
        <Wrapper style={styles.container}>
            <Image
                source={require("../assets/logo-red.png")}
                style={styles.logo}
            />
            <Form
                initialValues={{ email: "", name: "", password: "" }}
                onSubmit={handleRegistration}
                validationSchema={validationSchema}
            >
                <ErrorMessage error={regError} visible={regError} />
                <FormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="account"
                    name="name"
                    placeholder="Name"
                />
                <FormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    keyboardType="email-address"
                    name="email"
                    placeholder="Email"
                    textContentType="emailAddress"
                />
                <FormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="password"
                    placeholder="Password"
                    secureTextEntry
                    textContentType="password"
                />
                <SubmitButton title="Register" color="secondary" />
            </Form>
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

export default Register
