// Importar routes desde express
const router = require("express").Router();

// Crear la ruta para las songs
router.use("/songs", require("./songsRoutes"));

// Exportar la ruta
module.exports = router;
