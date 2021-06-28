const { editSong } = require('../../queries/songs')

module.exports = async (req, res, next) => {
    const { id } = req.params

    const { artist, name, link, youtube_id } = req.body

    if(!artist || !name || !link || !youtube_id) {
        return next({
            info: new Error('all fields are mandatory')
        })
    }

    const result = await editSong(id, { artist, name, link, youtube_id })

    res.status(200).json({
        success: true,
        data: result,
    })
}