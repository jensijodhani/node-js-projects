const mongoose = require('mongoose');

const catSchema = mongoose.Schema({
    category_name: {
        type: String,
        required: true,
    }
})
const category = mongoose.model('category', catSchema);
module.exports = category;