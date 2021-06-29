const {
    findUser,
    addToPlaylist,
} = require('../../queries/users')
const { getSongId } = require('../../queries/songs')

module.exports = async (req, res, next) => {
    const { user } = req.params
    const { youtube_id } = req.body

    if(!youtube_id) {
        return next({ info: new Error('youtube id is needed to save in playlist') })
    }

    const result = await findUser(user)

    if(!result) {
        return next({ info: new Error('something went wrong') })
    }

    const song = await getSongId(youtube_id)

    if(!song) {
        return next({ info: new Error('song not found') })
    }

    const userUpdated = await addToPlaylist(user, song._id)

    res.status(200).json({
        success: true,
        data: userUpdated,
    })
}