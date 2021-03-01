import { create } from "apisauce"

import cache from "../utils/cache"

export const baseURL = "http://192.168.0.101:5000"

const apiClient = create({ baseURL })

const getMethod = apiClient.get

apiClient.get = async (url, params, axiosConfig) => {
    const response = await getMethod(url, params, axiosConfig)

    if (response.ok) {
        cache.store(url, response.data)
        return response
    }

    const data = await cache.get(url)

    return data ? { ok: true, data } : response
}

export default apiClient
