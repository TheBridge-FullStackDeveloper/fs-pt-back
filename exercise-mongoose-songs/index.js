const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000


// parse various different custom JSON types as JSON
app.use(express.json())
app.use(bodyParser.json({ type: 'application/*+json' }))
// app.use(/*Importar rutas*/)
require('./config/db');

app.use('/', require('./routes'));


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
