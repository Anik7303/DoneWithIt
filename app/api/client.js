import { create } from "apisauce"

import cache from "../utils/cache"
import settings from "../config/settings"
import storage from "../auth/storage"

export const baseURL = settings.apiUrl

const client = create({ baseURL })

client.addAsyncRequestTransform(async (request) => {
    const token = await storage.getToken()
    if (!token) return
    request.headers["x-auth-token"] = token
})

const getMethod = client.get

client.get = async (url, params, axiosConfig) => {
    const response = await getMethod(url, params, axiosConfig)

    if (response.ok) {
        cache.store(url, response.data)
        return response
    }

    const data = await cache.get(url)

    return data ? { ok: false, data } : response
}

export default client
