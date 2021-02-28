const path = require('path')
const jimp = require('jimp')

exports.generateError = (code, message) => {
    const error = new Error(message)
    error.code = code
    return error
}

/**
 *
 * @param {Array} images An array of image names
 * @param {Number} width Optional A number value of width e.b. 1920
 * @param {Number} height Optional A number value of height e.g. 1090
 * @param {Number} quality Optional A number value of quality of the image e.g. 90
 */
exports.saveThumbnails = async (
    images,
    width = 100,
    height = jimp.AUTO,
    quality = 50
) => {
    await Promise.all(
        images.map(async (imageName) => {
            const image = await jimp.read(
                path.resolve('assets', 'images', imageName)
            )
            await image.resize(width, height)
            await image.quality(quality)
            await image.writeAsync(
                path.resolve('assets', 'thumbnails', imageName)
            )
        })
    )
}
