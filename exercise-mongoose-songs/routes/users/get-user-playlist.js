const { getPlaylistByUser } = require('../../queries/users')

module.exports = async (req, res, next) => {
    const { user } = req.params

    const result = await getPlaylistByUser(user)

    res.status(200).json({
        success: true,
        data: result,
    })
}
