# MongoDB CRUD

CRUD - Create, Read, Update, and Delete

## Create 🖌

Las operaciones de creación o inserción agregan nuevos documentos a una colección. Si la colección no existe actualmente, las operaciones de inserción crearán la colección.

MongoDB proporciona los siguientes métodos para insertar documentos en una colección:

- db.collection.insertOne()
- db.collection.insertMany()

```
db.collection.insertOne({
  name: "Test",
  age: 19,
  status: "Pending"
})
```

## Read 📚

Las operaciones de lectura recuperan documentos de una colección.

- db.collection.find()

```
db.collection.find({
  { age: { $gt: 18 }},
}).limit(5)
```
## Update ✏️

Las operaciones de actualización modifican los documentos existentes en una colección. MongoDB proporciona los siguientes métodos para actualizar documentos de una colección:

- db.collection.updateOne()
- db.collection.updateMany()
- db.collection.replaceOne()

```
db.collection.updateOne(
  { age: { $lt: 18 }},
  { $set: { status: "reject"}}
)
```

## Delete 🗑

Las operaciones de eliminación eliminan documentos de una colección. MongoDB proporciona los siguientes métodos para eliminar documentos de una colección:

- db.collection.deleteOne()
- db.collection.deleteMany()

```
db.collection.deleteMany(
  { status: "reject" }
)
```