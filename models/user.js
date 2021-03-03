const bcrypt = require('bcryptjs')
const mongoose = require('mongoose')

const { USER } = require('./names')
const { messageSchema } = require('./schemas')

const Schema = mongoose.Schema

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        pushToken: {
            type: String,
            default: '',
        },
        messages: [messageSchema],
    },
    { timestamps: true }
)

userSchema.pre('save', async function (next) {
    const user = this
    if (user.isModified('password')) {
        try {
            const salt = await bcrypt.genSalt(12)
            const hash = await bcrypt.hash(user.password, salt)
            user.password = hash
            next()
        } catch (error) {
            next(error)
        }
    }
})

userSchema.methods.comparePassword = function (candidatePassword) {
    const user = this
    return new Promise(async (resolve, reject) => {
        try {
            const matched = await bcrypt.compare(
                candidatePassword,
                user.password
            )
            resolve(matched)
        } catch (error) {
            reject(error)
        }
    })
}

/**
 * Stores provided token to user's pushToken field
 * @param {String} token Expo push token
 */
userSchema.methods.setPushToken = function (token) {
    const user = this
    return new Promise(async (resolve, reject) => {
        try {
            user.pushToken = token
            await user.save()
            resolve(true)
        } catch (error) {
            reject(error)
        }
    })
}

/**
 * Add a message to user's message list
 * @param {Object} message Contains title, body, senderId, data?
 */
userSchema.methods.addMessage = function (message) {
    const user = this
    return new Promise(async (resolve, reject) => {
        try {
            const updatedMessages = [...user.messages, message]
            user.messages = updatedMessages
            await user.save()
            resolve(user)
        } catch (error) {
            reject(error)
        }
    })
}

mongoose.model(USER, userSchema)
