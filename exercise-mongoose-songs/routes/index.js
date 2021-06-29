const router = require('express').Router()

router.use('/songs', require('./songs'))
router.use('/users', require('./users'))

module.exports = router