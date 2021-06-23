const mongoose = require("mongoose")

const mongooseConfigs = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}

mongoose
  .connect("mongodb://localhost/library", mongooseConfigs)
  .then(() => console.log("> succesfully connected to mongoDB 💿"))
  .catch((error) => {
    console.error("> error trying to connect to mongoDB: ", error.message);
    process.exit(0);
  });