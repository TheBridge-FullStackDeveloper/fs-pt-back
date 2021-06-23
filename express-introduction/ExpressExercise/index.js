const { PORT } = require("./constants")
const path = require("path")
const express = require("express")
const app = express()
let init = 1
app.use(express.json())


app.use('/statics', express.static(path.join(__dirname, "/statics")))

app.use((req, res, next) => {
    console.log("Middleware 1")
    res.locals = {
        coin: Math.random() < 0.5 ? "cara" : "cruz",
        number: init++
    }
    next()
    
})


app.use((req, res, next) => {
    if (res.locals.coin === "cruz") {
        console.log(`(CRUZ) La moneda número ${res.locals.number} ha salido ${res.locals.coin}`)
        console.log(res.locals)
        res.send("Cruz")    
    } else {
        console.log(`(CARA) La moneda número ${res.locals.number} ha salido ${res.locals.coin}`)
        console.log(res.locals)
        res.locals.number++
        res.send("Caras")

    }
})

app.listen(PORT, () => {
    console.info(`> Listening at http:localhost:${PORT}`)

})