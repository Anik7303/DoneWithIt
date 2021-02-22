import React from "react"
import { useFormikContext } from "formik"

import AppPicker from "../AppPicker"
import ErrorMessage from "./ErrorMessage"

const AppFormPicker = ({ data, icon, name, placeholder, ...otherProps }) => {
    const { errors, setFieldValue, touched, values } = useFormikContext()

    return (
        <>
            <AppPicker
                data={data}
                icon={icon}
                onItemSelect={(item) => setFieldValue(name, item)}
                placeholder={placeholder}
                selectedItem={values[name]}
                {...otherProps}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    )
}

export default AppFormPicker
