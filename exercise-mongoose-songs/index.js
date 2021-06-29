require('./configs/db')
const express = require('express')
const app = express()
const { PORT } = require('./constants')

app.use(express.json())

app.use(require('./routes'))

app.use((req, res, next) => {
  next({ info: new Error('path not found') })
})

app.use(({ status = 400, info }, req, res, next) => {
  res.status(status).json({
    success: false,
    message: info.message,
  })
})

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})
