const mongoose = require('mongoose')


const dataschama = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: String,
        require: true
    },
    qty: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },

})

const datauser = mongoose.model('datauser', dataschama)

module.exports = datauser    