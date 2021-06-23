# Mongoose

1- Instalar mongoose

```
npm install mongoose --save
```

2- Create mongoose connection in `configs/db.js`

```js
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/library", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})
  .then(() => console.info("> succesfully connected to mongoDB"))
  .catch((error) => {
    console.error("> error trying to connect to mongoDB: ", error.message);
    process.exit(0);
  });
```

3- Inicializar Schema in `models/books.js`

```js
const mongoose = require("mongoose");
const { Schema } = mongoose;

const BookSchema = new Schema({
  title: {
    type: String,
    unique: true,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
  },
  isbn: {
    type: String,
    unique: true,
    required: true,
  },
});

const Books = mongoose.model("Books", BookSchema);

module.exports = Books;
```

4- Requerir mongoose in `index.js`

```js
require("./configs/db");
```

5- Crear rutas in `routes/books/index.js`

```js
const router = require("express").Router();

router.get("/", async (req, res, next) => {});
router.post("/", async (req, res, next) => {});
router.put("/", async (req, res, next) => {});
router.delete("/", async (req, res, next) => {});

module.exports = router;
```

6- Importar `BooksModel` para poder efectuar consultas a la BBDD

```js
const BooksModel = require("../../models/Book");
```

7- Query para devolver todos los libros

```js
const result = await BooksModel.find({}, { _id: 0, __v: 0 });
```

8- Query para crear un libro

```js
const result = await BooksModel.create(newBook);
```

9- Query para actualizar un libro

```js
const result = await BooksModel.findOneAndUpdate(
  { isbn }, // el campo por el que busca para encontrar el documento
  { year }, // los campos que actualiza
  { new: true } // para devolver el documento actualizado o el de antes de actualizar
);
```

10- Query para borrar un libro

```js
const result = await BooksModel.findOneAndDelete({ isbn });
```
