const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  username: { type: String },
  playlist: [{ type: Schema.Types.ObjectId, ref: "Songs" }],
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
