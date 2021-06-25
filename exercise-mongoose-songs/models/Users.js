const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    playlist: {
        type: [{ type: Schema.Types.ObjectId, ref: "SongsCollection"}]
    }

})

const Users = mongoose.model("UserDB", UserSchema)

module.exports = Users