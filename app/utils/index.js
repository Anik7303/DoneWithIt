import { baseURL } from "../api/client"

export const getExtension = (filename) => {
    const parts = filename.split(".")
    return parts[parts.length - 1]
}

export const getImageType = (filename) => {
    const ext = getExtension(filename)
    switch (ext) {
        case "jpg":
        case "jpeg":
        case "jfif":
        case "pjpeg":
        case "pjp":
            return "image/jpeg"
        default:
            return `image/${ext}`
    }
}

export const generateImageUrl = (name) => name
// export const generateImageUrl = (name) => `${baseURL}/assets/${name}`
