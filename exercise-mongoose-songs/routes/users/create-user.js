const { createUser } = require('../../queries/users')

module.exports = async (req, res, next) => {
    const { username } = req.body

    if(!username) {
        return next({ info: new Error('username field is mandatory') })
    }

    const result = await createUser(username)

    res.status(200).json({
        success: true,
        data: result,
    })
}