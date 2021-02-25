const express = require('express')
const mongoose = require('mongoose')

const { generateError } = require('../utils')

// models
const User = mongoose.model('user')

const router = express.Router()

router.post('/login', async (req, res, next) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email })
        if (!user)
            throw generateError(
                404,
                'This email is not associated with any account'
            )

        const matched = await user.comparePassword(password)
        if (!matched) throw generateError(422, 'Wrong password')

        res.status(200).json({ _id: user._id, email: user.email })
    } catch (error) {
        console.log({ error })
        next(error)
    }
})

router.post('/register', async (req, res, next) => {
    const { email, password } = req.body
    try {
        const existingUser = await User.findOne({ email })
        if (existingUser)
            throw generateError(422, 'This email is associated with an account')

        const user = new User({ email, password })
        await user.save()

        res.status(201).json({ _id: user._id, email: user.email })
    } catch (error) {
        next(error)
    }
})

module.exports = router
