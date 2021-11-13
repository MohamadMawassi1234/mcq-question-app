const mongoose = require("mongoose")

const questionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    correct: {
        type: String,
        required: true
    },
    wrong1: {
        type: String,
        required: true
    },
    wrong2: {
        type: String,
        required: true
    },
    wrong3: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: [true, 'must provide name'],
        trim: true,
        maxlength: [20, 'name can not be more than 20 characters'],
    },
    status: {
        type: String
    }
})

module.exports = mongoose.model("Question", questionSchema)