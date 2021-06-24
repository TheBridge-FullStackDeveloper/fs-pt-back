const mongoose = require("mongoose");
const {Schema} = mongoose;

const SongSchema = new Schema({
    artist: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    youtube_id: {
      type: String,
      unique: true,
      required: true,
    }
  });

const Songs = mongoose.model("SongsCollection", SongSchema);

module.exports = Songs;
