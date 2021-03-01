const path = require('path')
const fs = require('fs')
const jimp = require('jimp')
const jwt = require('jsonwebtoken')

/**
 *
 * @param {Number} code Error code eg. 404
 * @param {String} message Error message eg. File not found
 */
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

/**
 *
 * @param {String} url File url
 */
exports.getFilenameFromUrl = (url) => path.basename(url)

/**
 *
 * @param {String} filepath delete file path
 */
exports.deleteFile = (filepath) =>
    new Promise((resolve, reject) => {
        try {
            fs.unlink(filepath, (err) => {
                if (err) reject(err)
                resolve()
            })
        } catch (err) {
            reject(err)
        }
    })

/**
 *
 * @param {Array} images An array of image names
 */
exports.deleteImages = async (images) => {
    return Promise.all(
        images.map(async (name) => {
            await this.deleteFile(path.resolve('assets', 'images', name))
            await this.deleteFile(path.resolve('assets', 'thumbnails', name))
        })
    )
}

/**
 *
 * @param {Any} payload payload for jsonwebtoken
 */
exports.generateToken = (payload) => jwt.sign(payload, process.env.JWT_SECRET)
