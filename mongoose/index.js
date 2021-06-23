const express = require('express')
const app = express()
const port = 3000
const BooksModel = require("./models/Books");

require('./config/db');

app.get('/get-books', async (req, res) => {
  const result = await BooksModel.find({});
  console.log('Libros: '+result);
  res.send(result);
})

app.get('/create-book', async (req, res) => {
  const newBook = {
    title: 'La historia INCREIBLE',
    author: 'Elisa',
    year: 2001,
    isbn: 'aabb1125'
  }

  const result = await BooksModel.create(newBook);
  console.log('Libro creado: ' + result);
  res.send(result);
  
})

app.get('/update-book', async (req, res) => {
  const result = await BooksModel.findOneAndUpdate(
    { title: "La historia INCREIBLE" }, // el campo por el que busca para encontrar el documento
    { author: "Maider" }, // los campos que actualiza
    { new: true } // para devolver el documento actualizado o el de antes de actualizar
  );
  console.log('Libro Modificado: '+result);
  res.send(result);
})

app.get('/delete-one', async (req, res) => {
  const result = await BooksModel.findOneAndDelete({ isbn: "aabb1124" });
  
  console.log('Libro Borrado: '+result);
  res.send(result);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
