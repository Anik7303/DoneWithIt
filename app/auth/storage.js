import * as SecureStore from "expo-secure-store"
import jwtDecode from "jwt-decode"

const key = "auth_token"

const storeToken = async (token) => {
    try {
        await SecureStore.setItemAsync(key, token)
    } catch (error) {
        console.error("storeToken", error)
    }
}

const getToken = async () => {
    try {
        return await SecureStore.getItemAsync(key)
    } catch (error) {
        console.error("getToken", error)
    }
}

const getUser = async () => {
    try {
        const token = await getToken()
        return token ? jwtDecode(token) : null
    } catch (error) {
        console.error("getUser", error)
    }
}

const removeToken = async () => {
    try {
        await SecureStore.deleteItemAsync(key)
    } catch (error) {
        console.error("removeToken", error)
    }
}

export default { getUser, removeToken, storeToken }
