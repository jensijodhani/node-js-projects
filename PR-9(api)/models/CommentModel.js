const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    blogid: {
         type: mongoose.Schema.Types.ObjectId,
        ref: 'blog'
    },
    comment: {
        type: String,
        require: true
    }
})
const comment = mongoose.model('comment', userSchema)
module.exports = comment;