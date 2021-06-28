const SongModel = require('../models/Songs')

const getAllSongs = async () => {
    return await SongModel.find({}, { _id: 0, __v: 0 })
}

const addNewSong = async ({ artist, name, link, youtube_id }) => {
    return await SongModel.create({ artist, name, link, youtube_id })
}

const editSong = async (id, { artist, name, link, youtube_id }) => {
    return await SongModel.findOneAndUpdate(
        { youtube_id: id },
        { artist, name, link, youtube_id },
        { new: true }
    ).select('-_id -__v')
}

const deleteSong = async id => {
    return await SongModel.findOneAndDelete({ youtube_id: id })
}

module.exports = {
    getAllSongs,
    addNewSong,
    editSong,
    deleteSong,
}