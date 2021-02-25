const express = require('express')
const mongoose = require('mongoose')

// mongoose models
const Product = mongoose.model('product')

const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const products = await Product.find()
        res.status(200).json(products)
    } catch (error) {
        next(error)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const { categoryId, description, price, title } = req.body
        const images = req.files.map((file) => file.filename)

        const product = new Product({
            categoryId,
            description,
            price,
            title,
            images,
        })
        await product.save()

        res.status(201).json(product)
    } catch (error) {
        next(error)
    }
})

module.exports = router
