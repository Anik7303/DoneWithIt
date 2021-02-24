import React from "react"
import { useFormikContext } from "formik"

import ErrorMessage from "./ErrorMessage"
import ImageInputList from "../ImageInputList"

const FormImagePicker = ({ name }) => {
    const { errors, setFieldValue, touched, values } = useFormikContext()
    const uris = values[name]

    const handleAdd = (uri) => setFieldValue(name, [...uris, uri])

    const handleRemove = (uri) =>
        setFieldValue(
            name,
            uris.filter((imageUri) => imageUri !== uri)
        )

    return (
        <>
            <ImageInputList
                onImageAdd={handleAdd}
                onImageRemove={handleRemove}
                uris={uris}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    )
}

export default FormImagePicker
