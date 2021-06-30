const { createUser } = require('../../queries/users')

module.exports = async (req, res, next) => {
    const { username, file } = req.body

    const result = await createUser({ username, profile_image: file })

    res.status(200).json({
        success: true,
        data: result,
    })
}