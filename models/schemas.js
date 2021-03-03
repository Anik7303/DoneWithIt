const mongoose = require('mongoose')

const { USER } = require('./names')

const Schema = mongoose.Schema

exports.messageSchema = new Schema({
    senderId: {
        type: Schema.Types.ObjectId,
        ref: USER,
        required: true,
    },
    body: {
        type: String,
        default: '',
    },
    title: {
        type: String,
        default: '',
    },
    data: {
        type: Object,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})
