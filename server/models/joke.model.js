const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Setup is required"],
        minlength: [10, "Setup must have at least 10 characters"]
    },

    punchline: {
        type: String,
        required: [true, "Punchline is required"],
        minlength: [5, "Punchline must have at least 5 characters"]
    }
});

const Joke = mongoose.model("Joke", JokeSchema)

module.exports = Joke;