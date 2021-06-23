const mongoose = require("mongoose");
const { Schema } = mongoose;

/*Aquí estamos creando el modelo para el 
documento que vamos a guardar en la BBDD */
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

/* Aquí estamos creando la colección */
const Books = mongoose.model("Books", BookSchema);

module.exports = Books;
