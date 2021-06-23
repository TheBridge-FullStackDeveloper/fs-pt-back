const mongoose = require("mongoose");
// Importar Schema desde mongoose

const SongSchema = new Schema({/*Escribir el modelo del documento aquí*/});

const Songs = mongoose.model(/*Escribir nombre de la colección*/, SongSchema);

module.exports = Songs;
