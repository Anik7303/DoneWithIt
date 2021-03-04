import client from "./client"

import { getExtension, getImageType } from "../utils"

const endpoint = "/listings"

const getListings = () => client.get(endpoint)

const getUserListings = () => client.get(`/user/${endpoint}`)

const addListing = (listing, onUploadProgress) => {
    const { category, description, images, location, price, title } = listing
    const data = new FormData()

    data.append("title", title)
    data.append("price", price)
    data.append("categoryId", category.value)
    data.append("description", description)
    images.forEach((image, index) =>
        data.append("images", {
            name: `image-${index}.${getExtension(image)}`,
            type: getImageType(image),
            uri: image,
        })
    )
    if (location) data.append("location", JSON.stringify(location))

    return client.post(endpoint, data, {
        onUploadProgress: ({ loaded, total }) =>
            onUploadProgress(loaded / total),
    })
}

export default {
    addListing,
    getListings,
    getUserListings,
}
