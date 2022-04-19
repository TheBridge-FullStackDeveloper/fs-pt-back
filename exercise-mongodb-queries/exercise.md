## Crea la base de datos y la colección

  * Crea una base de datos que se llame Pokédex
  * Crea una colección que se llame pokemons
  * Importa el fichero pokemons.json (se encuentra en datasets) a la colección recién creada

  ##### Comando para importar desde la terminal del equipo

```js
mongoimport --db {databaseName} --collection {collectionName} --file {fileName}.json
```


## Ejercicios (Nunca muestres los ObjectID)

//NOTA: FILTER, PROJECT, SORT, LIMIT son menciones a sus respectivas casillas en Mongo Compass
TODO EL EJERCICIO ESTÁ HECHO EN COMPASS EXCEPTO EL ÚLTIMO APARTADO

  1. Muestra los nombres y el id de los primeros 151 pokemons
  FILTER: ( { id: { $lte: 150 } } )
  PROJECT: {_id: 0, name: 1, id: 1}


  2. Muestra los nombres y el tipo de todos los pokemons que sean únicamente de tipo planta (Grass)
  FILTER: {type: ['Grass'] }
  PROJECT: {_id: 0, name: 1, type: 1}


  3. Muestra los nombres y el tipo de todos los pokemons que sean tipo agua (no únicamente agua)
  FILTER: {type: 'Water' }
  PROJECT: {_id: 0, name: 1, type: 1}


  4. Muestra todos los pokemons que tengan más de 100 puntos de defensa base
  FILTER: { "base.Defense": { $gt: 100} }
  PROJECT: {_id: 0, name: 1, "base.Defense": 1}



  5. Muestra el nombre, ataque base e id del top 10 de los pokemons más fuertes ordenados de mayor a menor teniendo en cuenta el ataque base
  PROJECT: {_id: 0, name: 1, "base.Attack": 1, id: 1}
  SORT: { "base.Attack" : -1 }
  LIMIT: 10

  6. Muestra el nombre, defensa base e id del top 10 de los más débiles ordenados de más débil a menos débil teniendo en cuenta la defensa base
  PROJECT: {_id: 0, name: 1, "base.Defense": 1, id: 1}
  SORT: { "base.Defense" : 1 }
  LIMIT: 10



  7. Muestra el nombre, velocidad e id del top 5 de los pokemons más rápidos de la segunda generación (ids: 152 - 251)
  PROJECT: {_id: 0, name: 1, "base.Speed": 1, id: 1}
  SORT: { "base.Speed" : -1 }
  LIMIT: 5
  

  8. Crea un Gyarados Shiny que tenga todos los stats a 1000 y sea de tipo Agua/Dragón
  Adjunto captura: 'Ej 8 Gyarados shiny'


  9. Crea 3 Pokemon bicho que tengan 20 puntos de stat y cuyos nombres serán Firebug, Waterbug y Grassbug. Los tipos serán Fuego/Bicho, Agua/Bicho y Planta/Bicho. No olvidéis los ids de cada uno!
  Creé fichero JSON con los 3 bichos y lo importé, adjunto: 'Ej 9 bichos'



  10. Consulta todos los pokemons que tengan 100 puntos de velocidad y 20 puntos de ataque base, defensa base y vida


  11. Actualiza el pokemon Blastoise para que sea shiny (cámbiale el nombre y auméntale la vida a 700 puntos y el resto de stats a 500
  Editado directamente en Mongo Compass, adjunto: 'Ej 11 Blastoise la tortuga'



  12. Elimina a todos los pokemons que tengan menos de 100 de ataque base

  db.Pokemon.deleteMany({ "base.Attack": { $lt: 100} }) //shell