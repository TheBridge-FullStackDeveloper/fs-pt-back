
const router = require("express").Router();

router.use('/songs', require("./songsRoutes"));
router.use('/users', require("./userRoutes"))

module.exports = router