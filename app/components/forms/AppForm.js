import React from "react"
import { Formik } from "formik"

const AppForm = ({
    children,
    initialValues,
    onSubmit,
    validationSchema,
    ...otherProps
}) => (
    <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        {...otherProps}
    >
        {() => <>{children}</>}
    </Formik>
)

export default AppForm
