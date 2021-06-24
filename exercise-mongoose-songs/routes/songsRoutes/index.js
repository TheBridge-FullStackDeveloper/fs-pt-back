// Importar routes desde express
const router = require("express").Router();
const SongsModel = require('../../models/Songs');
// Crear la ruta para GET
router.get("/get-songs",  async (req, res) => {
    const result = await SongsModel.find({});
    res.send(result);
  });
// Crear la ruta para POST
// Crear la ruta para PUT
// Crear la ruta para DELETE

// Exportar la ruta