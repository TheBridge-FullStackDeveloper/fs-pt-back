const mongoose = require('mongoose')
const { Schema } = mongoose

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    playlist: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Songs'
        }
    ]
})

module.exports = mongoose.model('Users', UserSchema)