import AsyncStorage from "@react-native-async-storage/async-storage"
import dayjs from "dayjs"

const prefix = "cache"
const expireTimeInMinutes = 5

const store = async (key, value) => {
    try {
        const item = {
            value,
            timestamp: Date.now(),
        }
        await AsyncStorage.setItem(prefix + key, JSON.stringify(item))
    } catch (error) {
        console.error(error)
    }
}

const isExpired = (item) => {
    const now = dayjs()
    const storedAt = dayjs(item.timestamp)
    return now.diff(storedAt, "minute") > expireTimeInMinutes
}

const get = async (key) => {
    try {
        const value = await AsyncStorage.getItem(prefix + key)
        const item = JSON.parse(value)

        if (!item) return null

        if (isExpired(item)) {
            await AsyncStorage.removeItem(prefix + key)
            return null
        }

        return item.value
    } catch (error) {
        console.error(error)
    }
}

export default {
    store,
    get,
}
