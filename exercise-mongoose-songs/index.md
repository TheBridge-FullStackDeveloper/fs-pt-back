# Mongoose Songs 🎧

1 - Instalar con npm express, mongoose y body-parser

2 - Dentro de `configs/db.js` crear la conexión con mongoose a la BBDD

1. Añadir la URL a la BBDD

3 - Crear el modelo y el Schema para `Songs` en `./models/Songs.js`

1. Importar la clase `Schema` desde mongoose
2. Crear el modelo para `Song` que respete esta estructura 
```
{
  "artist": "Pharrell Williams",
  "link": "http://top40-charts.com/song.php?sid=36547",
  "name": "Happy",
  "youtube_id": "Q-GLuydiMe4"
},
```
4 - Ejecutar el `seeds.js` para rellenar la colección de `Songs` con es te script
```
npm run seeds:songs
```
Controlar in mongo shell o en compass si la colección a sido importada correctamente

5 - Crear un CRUD para las colección de `Songs` dentro de `./routes/songsRoutes/index.js`

1. GET
2. POST
3. PUT
4. DELETE

6 - Crear otro modelo `User` con estas propriedades:

⚠️ Esto no es un modelo para el Schema!
```js
{
  username: String,
  playlist: Array<ObjectId>
}
```
7 - Crear un una ruta para poder añadir una canción en la playlist del usuario

8 - Crear una ruta para devolver todas las conciones de una playlist de un usuario utilizando el `.populate()`

🏆 Bonus

9- Implementar try/catch en todas lar rutas para manejar los errores
Ejemplo:
```js
router.get('/get-books', (req, res) => {
  try {
    const result = await Books.find({});
    res.status(200).json({ result });
  } catch (err) {
    res.status(500).json({ err });
  }
})
```