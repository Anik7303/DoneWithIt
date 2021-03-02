const express = require('express')

const {
    deleteListing,
    getListings,
    postListing,
    putListing,
} = require('../controllers')

const router = express.Router()

router.get('/', getListings)

router.post('/', postListing)

router.put('/:id', putListing)

router.delete('/:id', deleteListing)

module.exports = router
