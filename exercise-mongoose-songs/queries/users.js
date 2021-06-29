const UserModel = require('../models/Users')

const createUser = async username => {
    const { username: user, playlist } = await UserModel.create({ username })
    return { username: user, playlist }
}

const addToPlaylist = async (username, songId) => {
    return await UserModel.findOneAndUpdate(
        { username },
        { $addToSet: { playlist: songId } },
        { new: true }
    )
}

const findUser = async username => {
    return await UserModel.findOne({ username })
}

const getPlaylistByUser = async username => {
    return await UserModel
        .findOne({ username })
        .populate('playlist', '-_id -__v')
        .select('playlist -_id')
}

module.exports = {
    createUser,
    addToPlaylist,
    findUser,
    getPlaylistByUser,
}