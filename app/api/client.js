import { create } from "apisauce"

import cache from "../utils/cache"
import storage from "../auth/storage"

export const baseURL = "http://192.168.0.101:5000/api"

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

    return data ? { ok: true, data } : response
}

export default client
