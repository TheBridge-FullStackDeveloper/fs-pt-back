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
