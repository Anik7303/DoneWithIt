import { useState, useEffect } from "react"

const useApi = (apiFunc) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const request = async (...args) => {
        setLoading(true)
        const response = await apiFunc(...args)
        setLoading(false)

        setError(!response.ok)
        setData(response.data)
        return response
    }

    return { data, error, loading, request }
}

export default useApi
