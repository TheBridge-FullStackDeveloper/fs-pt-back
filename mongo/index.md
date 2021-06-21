# MongoDB

## Introduction

MongoDB es una base de datos de documentos diseñada para facilitar el desarrollo y la escalabilidad.

Un registro en MongoDB es un documento, que es una estructura de datos compuesta por pares de campo y valor. Los documentos MongoDB son similares a los objetos JSON. Los valores de los campos pueden incluir otros documentos, matrices y matrices de documentos.

![collection](https://docs.mongodb.com/manual/images/crud-annotated-collection.bakedsvg.svg)

![database](https://media.geeksforgeeks.org/wp-content/uploads/20200219180521/MongoDB-database-colection.png)

## ⚙️ [Installation](https://docs.mongodb.com/manual/installation/)
|Linux|
 -> https://docs.mongodb.com/manual/administration/install-on-linux/

macOS -> https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/

Windows -> https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/

## 💻 [The mongo Shell](https://docs.mongodb.com/manual/mongo/)

Para abrir el mongo shell hay que ejecutar en consola:
```
mongo
```
Después haber ejecutado el comando deberíamos ver la terminal así:
```
MongoDB shell version v4.0.3
connecting to: mongodb://127.0.0.1:27017
>
```
Mostrar la BBDD en la cual estamos:
```
db
```
Cambiar de BBDD:
```
use <AQUI NOMBRE BBDD>
```
Mostrar todas las BBDD:
```
show dbs
```
Borrar BBDD:
```
use temp
db.dropDatabase()
```
Crear una collecion:
```
db.createCollection(myNewDatabase)
```
Borrar una colleccion:
```
db.collection.drop( { writeConcern: <document> } )
```
Añadir algo:
```
use myNewDatabase
db.myCollection.insertOne( { x: 1 } );
```
- myCollection es el nombre de la colleccion.

devolver todo las informaciones de la BBDD:
```
db.myCollection.find().pretty()
```

añadir varios elementos:
```
db.inventory.insertMany([
   { item: "journal", qty: 25, status: "A", size: { h: 14, w: 21, uom: "cm" }, tags: [ "blank", "red" ] },
   { item: "notebook", qty: 50, status: "A", size: { h: 8.5, w: 11, uom: "in" }, tags: [ "red", "blank" ] },
   { item: "paper", qty: 10, status: "D", size: { h: 8.5, w: 11, uom: "in" }, tags: [ "red", "blank", "plain" ] },
   { item: "planner", qty: 0, status: "D", size: { h: 22.85, w: 30, uom: "cm" }, tags: [ "blank", "red" ] },
   { item: "postcard", qty: 45, status: "A", size: { h: 10, w: 15.25, uom: "cm" }, tags: [ "blue" ] }
]);

// MongoDB adds an _id field with an ObjectId value if the field is not present in the document
```

## Queries

El siguiente ejemplo selecciona de la colección de inventario todos los documentos donde el estado es igual a "D":
```
db.inventory.find( { status: "D" } )
```

El siguiente ejemplo recupera todos los documentos de la colección de inventario donde el estado es igual a "A" o "D":

```
db.inventory.find( { status: { $in: [ "A", "D" ] } } )
```
El siguiente ejemplo recupera todos los documentos de la colección de inventario donde el estado es igual a "A" y la cantidad es menor que ($ lt) 30:
```
db.inventory.find( { status: "A", qty: { $lt: 30 } } )
```

El siguiente ejemplo recupera todos los documentos de la colección donde el estado es igual a "A" o la cantidad es menor que
```
db.inventory.find( { $or: [ { status: "A" }, { qty: { $lt: 30 } } ] } )
```

## Coincidir con un documento anidado
Para especificar una condición de consulta en campos en un documento anidado, utiliza la notación de puntos ("field.nestedField").
```
db.inventory.find( { "size.uom": "in" } )
```

## Query de un Array

El siguiente ejemplo consulta para todos los documentos donde el valor de las etiquetas de campo es una matriz con exactamente dos elementos, "rojo" y "en blanco", en el orden especificado:
```
db.inventory.find( { tags: ["red", "blank"] } )
```

Si, en cambio, desea encontrar una matriz que contenga los elementos "rojo" y "en blanco", sin tener en cuenta el orden u otros elementos de la matriz, utilice el operador $ all:
```
db.inventory.find( { tags: { $all: ["red", "blank"] } } )
```
la siguiente operación consulta para todos los documentos donde la matriz dim_cm contiene al menos un elemento cuyo valor es mayor que 25.
```
db.inventory.find( { dim_cm: { $gt: 25 } } )
```
## Campos del proyecto para devolver de la consulta
De forma predeterminada, las consultas en MongoDB devuelven todos los campos en los documentos coincidentes. Para limitar la cantidad de datos que MongoDB envía a las aplicaciones, puede incluir un documento de proyección para especificar o restringir los campos que se devolverán.
```
db.inventory.find( { status: 'A' }, { item: 1, qty: 1, _id: 0 } )
```