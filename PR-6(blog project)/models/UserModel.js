const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    // name: {
    //     type: String,
    //     required: true,
    // },
    // price: {
    //     type: String,
    //     required: true,
    // },
    // seats: {
    //     type: String,
    //     required: true,
    // },
    // motype: {
    //     type: String,
    //     required: true,
    // },
    // image: {
    //     type: String,
    //     required: true,
    // },
})

const user = mongoose.model('user', userSchema);
module.exports = user;