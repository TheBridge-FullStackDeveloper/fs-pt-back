## Crea la base de datos y la colección

- Crea una base de datos que se llame Pokédex
- Crea una colección que se llame pokemons
- Importa el fichero pokemons.json (se encuentra en datasets) a la colección recién creada

##### Comando para importar desde la terminal del equipo

```js
mongoimport --db {databaseName} --collection {collectionName} --file {fileName}.json
```

## Ejercicios (Nunca muestres los ObjectID)

1. Muestra los nombres y el id de los primeros 151 pokemons

db.pokemos.find({},{name :1, id:1, \_id:0}).limit(151)

2. Muestra los nombres y el tipo de todos los pokemons que sean únicamente de tipo planta (Grass)

db.pokemos.find({type:["grass"]}, {name: 1, type: 1})

3. Muestra los nombres y el tipo de todos los pokemons que sean tipo agua (no únicamente agua)

db.pokemos.find({type : {$all: ["Water"]}}, {name: 1, type: 1} )

4. Muestra todos los pokemons que tengan más de 100 puntos de defensa base

db.pokemos.find({base.Defense: $gl{100}})

5. Muestra el nombre, ataque base e id del top 10 de los pokemons más fuertes ordenados de mayor a menor teniendo en cuenta el ataque base

db.pokemos.find().sort({"base.Attack": -1}, {name:1, "base.Attack":1, id:1, \_id:0}).limit(10)

6. Muestra el nombre, defensa base e id del top 10 de los más débiles ordenados de más débil a menos débil teniendo en cuenta la defensa base

db.pokemos.find({}, {name:1, "base.Attack":1, id:1, \_id:0}).limit(10).sort({"base.Attack": 1})

7. Muestra el nombre, velocidad e id del top 5 de los pokemons más rápidos de la segunda generación (ids: 152 - 251)

db.pokemos.find({$and: [{$or: [{id: {$lt: 251}}, {id: {$gt: 152}}]}]},{name:1, "base.Speed":1, id:1, \_id:0}).limit(5).sort({"base.Speed":-1})

8. Crea un Gyarados Shiny que tenga todos los stats a 1000 y sea de tipo Agua/Dragón

9. Crea 3 Pokemon bicho que tengan 20 puntos de stat y cuyos nombres serán Firebug, Waterbug y Grassbug. Los tipos serán Fuego/Bicho, Agua/Bicho y Planta/Bicho. No olvidéis los ids de cada uno!

10. Consulta todos los pokemons que tengan 1000 puntos de velocidad y 20 puntos de velocidad, ataque base, defensa base y vida

11. Actualiza el pokemon Blastoise para que sea shiny (cámbiale el nombre y auméntale la vida a 700 puntos y el resto de stats a 500

12. Elimina a todos los pokemons que tengan menos de 100 de ataque base
