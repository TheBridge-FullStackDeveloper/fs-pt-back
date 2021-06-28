const mongoose = require("mongoose")
const { Schema } = mongoose

const SongSchema = new Schema({
    artist: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    youtube_id: {
        type: String,
        required: true,
        unique: true,
    },
})

module.exports = mongoose.model('Songs', SongSchema)
