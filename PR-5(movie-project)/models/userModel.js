const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    seats: {
        type: Number,
        required: true,
    },
    motype: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
})

const user = mongoose.model('user', userSchema);
module.exports = user;