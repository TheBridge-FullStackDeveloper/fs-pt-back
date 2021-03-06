# MongoDB CRUD

CRUD - Create, Read, Update, and Delete

## Create 馃枌

Las operaciones de creaci贸n o inserci贸n agregan nuevos documentos a una colecci贸n. Si la colecci贸n no existe actualmente, las operaciones de inserci贸n crear谩n la colecci贸n.

MongoDB proporciona los siguientes m茅todos para insertar documentos en una colecci贸n:

- db.collection.insertOne()
- db.collection.insertMany()

```
db.collection.insertOne({
  name: "Test",
  age: 19,
  status: "Pending"
})
```

## Read 馃摎

Las operaciones de lectura recuperan documentos de una colecci贸n.

- db.collection.find()

```
db.collection.find({
  { age: {聽$gt: 18 }},
}).limit(5)
```
## Update 鉁忥笍

Las operaciones de actualizaci贸n modifican los documentos existentes en una colecci贸n. MongoDB proporciona los siguientes m茅todos para actualizar documentos de una colecci贸n:

- db.collection.updateOne()
- db.collection.updateMany()
- db.collection.replaceOne()

```
db.collection.updateOne(
  { age: { $lt: 18 }},
  { $set: { status: "reject"}}
)
```

## Delete 馃棏

Las operaciones de eliminaci贸n eliminan documentos de una colecci贸n. MongoDB proporciona los siguientes m茅todos para eliminar documentos de una colecci贸n:

- db.collection.deleteOne()
- db.collection.deleteMany()

```
db.collection.deleteMany(
  { status: "reject" }
)
```