import React from "react"

import Button from ".//Button"
import Text from "./Text"

const DataLoadingError = ({ onPress, text, visible }) =>
    visible ? (
        <>
            <Text>{text}</Text>
            <Button title="Retry" onPress={onPress} />
        </>
    ) : null

export default DataLoadingError
