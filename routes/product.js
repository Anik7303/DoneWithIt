const express = require('express')

const {
    deleteProduct,
    getProducts,
    postProduct,
    putProduct,
} = require('../controllers')

const router = express.Router()

router.get('/', getProducts)

router.post('/', postProduct)

router.put('/:id', putProduct)

router.delete('/:id', deleteProduct)

module.exports = router
