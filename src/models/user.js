const mongoose = require('mongoose')
const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error("You can't have negative Age");
            }
        }
    },
    email: {
        type: String,
        trim: true,
        required: true
    }
})

module.exports = User