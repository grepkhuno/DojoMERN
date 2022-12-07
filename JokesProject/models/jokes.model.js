const mongoose = require("mongoose")

const JokeSchema = new mongoose.Schema({
    setup: String,
    punchLine: String,
    dateCreated: Date,
    dateUpdated: Date
});

const JokeM = mongoose.model("Joke", JokeSchema);

module.exports = JokeM