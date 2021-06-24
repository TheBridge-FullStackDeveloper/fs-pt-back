
const router = require("express").Router();

// Crear la ruta para las songs
router.use('/', require("./songsRoutes"));

module.exports = router