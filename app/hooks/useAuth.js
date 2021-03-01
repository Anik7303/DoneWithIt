import React, { useContext } from "react"
import jwtDecode from "jwt-decode"

import AuthContext from "../auth/context"
import authStorage from "../auth/storage"

const useAuth = () => {
    const { user, setUser } = useContext(AuthContext)

    const login = async (token) => {
        const user = jwtDecode(token)
        setUser(user)
        authStorage.storeToken(token)
    }

    const logout = async () => {
        setUser(null)
        authStorage.removeToken()
    }

    return { user, login, logout }
}

export default useAuth
