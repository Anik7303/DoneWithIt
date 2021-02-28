const mongoose = require('mongoose')

const Schema = mongoose.Schema

const imageSchema = new Schema({
    url: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
})

const locationSchema = new Schema({
    latitude: {
        type: Number,
    },
    longitude: {
        type: Number,
    },
})

const productSchema = new Schema(
    {
        categoryId: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            default: '',
        },
        images: [imageSchema],
        price: {
            type: Number,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        location: locationSchema,
    },
    { timestamps: true }
)

mongoose.model('product', productSchema)
