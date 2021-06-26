// Importar routes desde express
const router = require("express").Router();

// Crear la ruta para las songs
router.use("/songs", require("./songsRoutes"));
router.use("/user", require("./userRoutes"));

// Exportar la ruta
module.exports = router;
