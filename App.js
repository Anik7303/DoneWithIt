import React, { useState } from "react"

import Wrapper from "./app/components/Wrapper"
import AppPicker from "./app/components/AppPicker"
import AppTextInput from "./app/components/AppTextInput"

const categories = [
    { label: "Furniture", value: 1 },
    { label: "Clothing", value: 2 },
    { label: "Cameras", value: 3 },
]

export default function App() {
    const [selectedItem, setSelectedItem] = useState(categories[0])
    console.log({ selectedItem })

    return (
        <Wrapper style={{ paddingTop: 100 }}>
            <AppPicker
                data={categories}
                icon="apps"
                placeholder="Category"
                selectedItem={selectedItem}
                onItemSelect={setSelectedItem}
            />
            <AppTextInput placeholder="Email" icon="email" />
        </Wrapper>
    )
}
