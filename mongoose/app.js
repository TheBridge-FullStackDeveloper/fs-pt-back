const express = require('express')
const app = express()
const port = 3000
 
// parse various different custom JSON types as JSON
app.use(express.json())

require('./config/db');

/* 
Aquí estamos importando las rutas y en el metodo use
le pasamos como primer parametro la path para la URL
y como segundo parametro el fichero donde hemos metido las rutas
*/
app.use('/', require('./routes'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
