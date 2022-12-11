const mongoose = require('mongoose');

const Schema = new mongoose.Schema(
    {
        _id : Number,
        name: String,
        species: String
    }
)

const Collections = mongoose.model("Collections", Schema)

module.export = Collections