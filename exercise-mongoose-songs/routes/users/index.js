const router = require('express').Router()
const { single } = require('../../configs/multer')
const { checkFile } = require('../../middlewares')

const createUser = require('./create-user')
const getUserPlaylist = require('./get-user-playlist')
const addToPlaylist = require('./add-to-playlist')

router.post('/new', [single, checkFile], createUser)
router.get('/:user/playlist', getUserPlaylist)
router.put('/:user/add', addToPlaylist)

module.exports = router