const mongoose = require("mongoose")

const mongooseConfigs = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}

mongoose
  .connect(/* Añadir URL a mongo*/, mongooseConfigs})
  .then(() => console.info("> succesfully connected to mongoDB"))
  .catch((error) => {
    console.error("> error trying to connect to mongoDB: ", error.message);
    process.exit(0);
  });