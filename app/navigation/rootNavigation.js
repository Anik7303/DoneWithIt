import { createRef } from "react"

export const navigationRef = createRef()

const navigate = (name, params) => navigationRef.current?.navigate(name, params)

export default { navigate }
