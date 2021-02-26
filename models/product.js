const mongoose = require('mongoose')

const Schema = mongoose.Schema

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
        images: [String],
        price: {
            type: Number,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        location: {
            latitude: Number,
            longitude: Number,
        },
    },
    { timestamps: true }
)

mongoose.model('product', productSchema)
