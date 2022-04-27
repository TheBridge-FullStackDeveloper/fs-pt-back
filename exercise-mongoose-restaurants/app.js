const express = require("express");
const app = express();
const PORT = 3000;
require("./configs/db");

app.use(express.json());
/*
app.use("/", require("./routes"))
*/
app.use( (error, req, res, next) => {
    next(new Error("path not found"));
});

app.use((error, req, res) => {
    res.status(404).json({
        success:false,
        message:error.message
    })
})


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT} 🔥`)
})