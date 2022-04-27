const mongoose = require("mongoose");

mongoose
    .connect("mongodb://localhost/restaurant", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then( () => {
        console.info("🎀Connected to MongoDB🎀")
    })
    .catch( (error) => {
        console.error(`😥 Error trying to connect to MongoDB: ${error.message}`);
        process.exit(0);
    })