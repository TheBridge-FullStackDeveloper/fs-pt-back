const {
    deleteSong,
    getAllSongs,
} = require('../../queries/songs')

module.exports = async (req, res, next) => {
    const { id } = req.params

    await deleteSong(id)
    const result = await getAllSongs()

    res.status(200).json({
        success: true,
        data: result,
    })
}