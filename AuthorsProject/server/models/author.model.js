const mongoose = require('mongoose')

const AuthorsSchema = mongoose.Schema({

    author: {
        type: String,
    },
    quote: {
        type: String,
    }

}, { timestamps: true })
const Author = mongoose.model('Author', AuthorsSchema)

module.exports = Author