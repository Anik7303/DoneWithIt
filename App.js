import React, { useState } from "react"

import Wrapper from "./app/components/Wrapper"
import AppTextInput from "./app/components/AppTextInput"
import AppText from "./app/components/AppText"

export default function App() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <Wrapper>
            <AppTextInput
                icon="email"
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                maxLength={6}
                autoCorrect={false}
            />
            <AppText>{email}</AppText>
            <AppTextInput
                icon="key"
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <AppText>{password}</AppText>
        </Wrapper>
    )
}
