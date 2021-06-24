const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

// parse various different custom JSON types as JSON
app.use(express.json())
app.use(bodyParser.json({ type: 'application/*+json' }))
// app.use(/*Importar rutas*/)
app.use('/', require('./routes'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
