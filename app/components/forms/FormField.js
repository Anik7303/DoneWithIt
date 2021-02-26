import React from "react"
import { useFormikContext } from "formik"

import TextInput from "../TextInput"
import ErrorMessage from "./ErrorMessage"

const AppFormField = ({ icon, name, placeholder, width, ...otherProps }) => {
    const {
        errors,
        setFieldTouched,
        setFieldValue,
        touched,
        values,
    } = useFormikContext()

    return (
        <>
            <TextInput
                onBlur={() => setFieldTouched(name)}
                onChangeText={(text) => setFieldValue(name, text)}
                icon={icon}
                placeholder={placeholder}
                value={values[name]}
                width={width}
                {...otherProps}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    )
}

export default AppFormField
