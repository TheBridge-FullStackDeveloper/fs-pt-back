const {
    addNewSong,
    getAllSongs,
} = require('../../queries/songs')

module.exports = async (req, res, next) => {
    const { artist, name, link, youtube_id } = req.body

    if(!artist || !name || !link || !youtube_id) {
        return next({
            status: 400,
            info: new Error('all fields are mandatory')
        })
    }

    await addNewSong({ artist, name, link, youtube_id })

    const result = await getAllSongs()

    res.status(200).json({
        success: true,
        data: result,
    })
}