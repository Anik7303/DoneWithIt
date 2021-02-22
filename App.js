import React, { useState } from "react"

import Wrapper from "./app/components/Wrapper"
import AppText from "./app/components/AppText"
import { Switch } from "react-native"

export default function App() {
    const [isNew, setIsNew] = useState(false)

    return (
        <Wrapper>
            <AppText>Switch Component</AppText>
            <Switch value={isNew} onValueChange={setIsNew} />
        </Wrapper>
    )
}
