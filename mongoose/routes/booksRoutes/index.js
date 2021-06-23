/* Importamos el router desde la librería express*/
const router = require("express").Router();
const BooksModel = require('../../models/Books');

/* Aquí estamos creando el CRUD para los libros */

router.get("/get-books", async (req, res) => {
  const result = await BooksModel.find({});
  res.send(result);
});

router.post('/create-book', async (req, res) => {
  const newBook = req.body;
  const result = await BooksModel.create(newBook);
  res.send(result);
});

router.put('/update-book/:isbn', async (req, res) => {
  const modifiedBook = req.body;
  const searchParam = req.params.isbn;

  const result = await BooksModel.findOneAndUpdate(
    { isbn: searchParam }, // el campo por el que busca para encontrar el documento
    modifiedBook, // los campos que actualiza
    { new: true } // para devolver el documento actualizado o el de antes de actualizar
  );
  console.log('Libro Modificado: '+result);
  res.send(result);
});

router.delete('/delete-one/:isbn', async (req, res) => {
  const {isbn} = req.params
  const result = await BooksModel.findOneAndDelete({ isbn });
  res.send(result);
})

module.exports = router;
