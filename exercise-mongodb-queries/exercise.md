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

db.pokemos.insertOne({id:810, name: "Gyarados Shiny", type: ["Water", "Dragon"], base: {"HP": 1000, "Attack":1000, "Defense":1000, "Sp. Attack":1000, "Sp. Defense": 1000, "Speed": 1000}})

9. Crea 3 Pokemon bicho que tengan 20 puntos de stat y cuyos nombres serán Firebug, Waterbug y Grassbug. Los tipos serán Fuego/Bicho, Agua/Bicho y Planta/Bicho. No olvidéis los ids de cada uno!

db.pokemos.insertMany([
{id:811, name: "Firebug", type: ["Fire", "Bug"], base: {"HP": 20, "Attack": 20, "Defense":20, "Sp. Attack":20, "Sp. Defense":20, "Speed":20} },
{id:812, name: "Waterbug", type: ["Water", "Bug"], base: {"HP": 20, "Attack": 20, "Defense":20, "Sp. Attack":20, "Sp. Defense":20, "Speed":20} },
{id:813, name: "Grassbug", type: ["Grass", "Bug"], base: {"HP": 20, "Attack": 20, "Defense":20, "Sp. Attack":20, "Sp. Defense":20, "Speed":20} }
])

10. Consulta todos los pokemons que tengan 1000 puntos de velocidad y 20 puntos de velocidad, ataque base, defensa base y vida

-

db.pokemos.find({$or: [{"base.Speed": 1000, "base.Speed": 20, "base.Attack":20, "base.Defense":20, "base.HP":20}]})

11. Actualiza el pokemon Blastoise para que sea shiny (cámbiale el nombre y auméntale la vida a 700 puntos y el resto de stats a 500

-

db.pokemos.updateOne({"name.englis": "Blastoise"}, {type:"Shiny", "name.english":"Blastoise Shiny", base: {"HP":700, "Attack": 500, "Defense":500, "Sp. Attack":500, "Sp. Defense": 500, "Speed":500} })

12. Elimina a todos los pokemons que tengan menos de 100 de ataque base

db.pokemos.deleteMany({"base.Attack"{$lt:100}})
