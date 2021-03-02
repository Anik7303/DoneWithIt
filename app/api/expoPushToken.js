import client from "./client"

const register = async (pushToken) =>
    client.put("/expo-push-token", { token: pushToken })

export default {
    register,
}
