const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')

const { generateError, generateToken } = require('../utility')

// models
const User = mongoose.model('user')

exports.login = async (req, res, next) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email })
        if (!user)
            throw generateError(
                404,
                'This email is not associated with any account'
            )

        const matched = await user.comparePassword(password)
        if (!matched) throw generateError(400, 'Wrong password')

        const token = generateToken({
            id: user._id,
            name: user.name,
            email: user.email,
        })

        res.status(200).json(token)
    } catch (error) {
        next(error)
    }
}

exports.register = async (req, res, next) => {
    const { name, email, password } = req.body
    try {
        const existingUser = await User.findOne({ email })
        if (existingUser)
            throw generateError(400, 'This email is associated with an account')

        const user = new User({ name, email, password })
        await user.save()

        const token = generateToken({
            id: user._id,
            name: user.name,
            email: user.email,
        })

        res.status(201).json(token)
    } catch (error) {
        next(error)
    }
}

exports.addExpoPushToken = async (req, res, next) => {
    try {
        const { token } = req.body
        if (!token)
            throw generateError(400, 'Push notification token not provided')

        await req.user.setPushToken(token)

        res.status(201).json({ message: 'token added successfully' })
    } catch (error) {
        next(error)
    }
}
