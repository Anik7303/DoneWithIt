const mongoose = require('mongoose')

const { generateError, saveThumbnails } = require('../utility')

// mongoose models
const Product = mongoose.model('product')

exports.getProducts = async (req, res, next) => {
    try {
        const products = await Product.find()
        res.status(200).json(products)
    } catch (error) {
        next(error)
    }
}

exports.postProduct = async (req, res, next) => {
    try {
        const { categoryId, description, price, title } = req.body
        const imageNames = req.files.map((file) => file.filename)
        const images = req.files.map((file) => ({
            url: `http://${process.env.HOST_IP}:${process.env.PORT}/assets/images/${file.filename}`,
            thumbnail: `http://${process.env.HOST_IP}:${process.env.PORT}/assets/thumbnails/${file.filename}`,
        }))

        await saveThumbnails(imageNames)

        const location = req.body.location
            ? JSON.parse(req.body.location)
            : null

        const product = new Product({
            categoryId,
            description,
            price,
            title,
            images,
        })
        if (location) product.location = location

        await product.save()

        res.status(201).json(product)
    } catch (error) {
        next(error)
    }
}

exports.putProduct = async (req, res, next) => {
    try {
        const { id } = req.params

        const { categoryId, description, title, price } = req.body
        const images = req.files.map((image) => image.filename)
        const location = req.body.location
            ? JSON.parse(req.body.location)
            : null

        const product = await Product.findById(id)
        if (!product) throw generateError(404, 'product not found')

        if (categoryId) product.categoryId = categoryId
        if (description) product.description = description
        if (price) product.price = price
        if (title) product.title = title
        if (images.length > 0) product.images = images
        if (location) product.location = location

        await product.save()

        res.status(200).json(product)
    } catch (error) {
        next(error)
    }
}

exports.deleteProduct = async (req, res, next) => {
    try {
        const { id } = req.params

        const product = await Product.findById(id)
        if (!product) throw generateError(404, 'product not found')

        await product.remove()

        res.status(200).end()
    } catch (error) {
        next(error)
    }
}
