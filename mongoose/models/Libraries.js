const mongoose = require("mongoose");
const { Schema } = mongoose;

/*Aquí estamos creando el modelo para el 
documento que vamos a guardar en la BBDD */
const LibrariesSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  books: [{ type: Schema.Types.ObjectId, ref:"Books" }]
});

/* Aquí estamos creando la colección */
const Libraries = mongoose.model("Libraries", LibrariesSchema);

module.exports = Libraries;
