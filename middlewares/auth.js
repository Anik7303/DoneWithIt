const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const { USER } = require('../models/names')
const { generateError } = require('../utility')

const User = mongoose.model(USER)

module.exports = async (req, res, next) => {
    try {
        const token = req.header('x-auth-token') || req.header('authorization')
        if (!token) throw generateError(401, 'Access denied. No token provided')

        jwt.verify(token, process.env.JWT_SECRET, async (err, { id }) => {
            if (err) throw generateError(401, err.message)

            const user = await User.findById(id)
            req.user = user
            next()
        })
    } catch (error) {
        next(error)
    }
}
