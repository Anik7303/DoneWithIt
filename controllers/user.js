const mongoose = require('mongoose')

const { LISTING } = require('../models/names')

const Listing = mongoose.model(LISTING)

exports.userListings = async (req, res, next) => {
    try {
        const listings = await Listing.find({ userId: req.user._id }).sort({
            createdAt: 'desc',
        })

        res.status(200).json(listings)
    } catch (error) {
        next(error)
    }
}
