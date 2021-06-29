const router = require('express').Router()

const createUser = require('./create-user')
const getUserPlaylist = require('./get-user-playlist')
const addToPlaylist = require('./add-to-playlist')

router.post('/new', createUser)
router.get('/:user/playlist', getUserPlaylist)
router.put('/:user/add', addToPlaylist)

module.exports = router