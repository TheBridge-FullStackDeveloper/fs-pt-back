/* Importamos el router desde la librería express*/
const router = require("express").Router();
const LibrariesModel = require('../../models/Libraries');

const checkAdmin = require('../../middleware/checkAdmin');

/* Aquí estamos creando el CRUD para los libros */
router.get("/get-libraries", checkAdmin, async (req, res) => {
  const result = await LibrariesModel.find({}).populate("books");
  res.send(result);
});

router.post('/create-library', async (req, res) => {
  const newLibrary = req.body;
  const result = await LibrariesModel.create(newLibrary);
  res.send(result);
});

module.exports = router;
