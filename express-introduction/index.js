const express = require('express')
const { PORT } = require('./constants')
const path = require('path')
const app = express()

app.use(express.json())
app.use('/statics', express.static(path.join(__dirname, 'statics')))

app.get('/hello', (req, res, next) => {
    res.status(200).json({
        success: true,
        data: ~~(Math.random() * 100)
    })
})

app.post('/name', (req, res, next) => {
    const { name } = req.body
    res.status(200).json({
        success: true,
        data: {
            name,
            age: '???'
        }
    })
})

app.use((req, res, next) => {
    console.log('> Soy el primero!')
    res.locals = {
        msg: 'Hola, soy res.locals!'
    }
    next()
})

app.use('/first', (req, res, next) => {
    console.log('> HOLA!')
    next()
})

app.use('/second', (req, res, next) => {
    console.log('> siguiente middleware!')
    next(new Error('Badddddd!!'))
})

app.use((req, res, next) => {
    res.send('De vuelta al cliente!')
    console.log('> RES: ', res.locals)
    next()
})

app.use('/third', () => {
    console.log('> Ahora termino!')
})

app.use((error, req, res, next) => {
    console.log('> error: ', error.message)
    next()
})

// app.use((req, res) => {
//     res.send('Pero finalmente resolvemos')
// })

app.listen(PORT, () => {
    console.info(`> Listening at http:localhost:${PORT}`)
})
