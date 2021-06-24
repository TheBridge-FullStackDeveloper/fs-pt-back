const mongoose = require("mongoose");
const { Schema } = mongoose;

const SongSchema = new Schema({
  artist: { type: String },
  link: { type: String },
  name: { type: String },
  youtube_id: { type: String },
});

const Songs = mongoose.model("Songs", SongSchema);

module.exports = Songs;
