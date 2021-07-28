const mongoose = require('mongoose')

const Product = mongoose.model('Product', {
    product_name: {
        type: String,
        required: true
    },
    product_price: {
        type: Number,
        required: true
    },
    product_image_url: {
        type: String
    }
})

module.exports = Product