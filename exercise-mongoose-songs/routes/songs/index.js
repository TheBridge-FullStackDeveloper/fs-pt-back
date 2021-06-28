const router = require('express').Router()

const allSongs = require('./all-songs')
const newSong = require('./new-song')
const editSong = require('./edit-song')
const deleteSong = require('./delete-song')

router.get('/', allSongs)
router.post('/new', newSong)
router.put('/:id', editSong)
router.delete('/:id', deleteSong)

module.exports = router