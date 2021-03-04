const express = require('express')

const {
    deleteListing,
    getListings,
    postListing,
    putListing,
} = require('../controllers')
const { requireAuth } = require('../middlewares')

const router = express.Router()

router.get('/', getListings)

router.use(requireAuth)

router.post('/', postListing)

router.put('/:id', putListing)

router.delete('/:id', deleteListing)

module.exports = router
