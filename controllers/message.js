const mongoose = require('mongoose')

const { USER, LISTING } = require('../models/names')
const { generateError } = require('../utility')

// mongoose models
const User = mongoose.model(USER)
const Listing = mongoose.model(LISTING)

exports.getMessages = async (req, res, next) => {
    try {
        console.log({ user: req.user })
        res.status(200).json(req.user.messages || [])
    } catch (error) {
        next(error)
    }
}

exports.postMessage = async (req, res, next) => {
    try {
        const { message, listingId, title, data } = req.body
        if ((!message && message !== '') || (!listingId && listingId !== ''))
            throw generateError(400, 'message and/or listingId not provided')

        const listing = await Listing.findById(listingId)
        if (!listing) throw generateError(404, 'listing not found')

        const userId = listing.userId
        const receiver = await User.findById(userId)
        if (!receiver) throw generateError(404, 'receiving user not found')

        const messageContent = {
            body: message,
            senderId: req.user._id,
        }
        messageContent.title = title || `From ${req.user.name}`
        if (data) messageContent.data = data
        await receiver.addMessage(messageContent)

        res.status(201).json({ message: 'message sent' })
    } catch (error) {
        next(error)
    }
}
