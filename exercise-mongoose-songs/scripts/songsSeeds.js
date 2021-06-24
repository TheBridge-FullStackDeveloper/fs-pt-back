require("../configs/db");

const SongsModel = require("../models/Songs.js");
const songs = require("../data/songs.json");

const populateSongCollection = async () => {
  await SongsModel.deleteMany({});
  console.info("> collection clean! 🗑️");

  await SongsModel.insertMany(songs);
  console.info("> Songs added! 🔥");
};

const main = async () => {
  await populateSongCollection();
  process.exit(0);
};

main();
