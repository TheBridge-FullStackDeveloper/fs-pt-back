// 4 recursos globales de NODE: module, require, __dirname, __filename
const colors = require("./modules");
console.log("> imported colors: ", colors);
console.log("> dirname: ", __dirname);
console.log("> filename: ", __filename);

// Podemos introducir argumentos por consola y recibirlo con process.argv
console.log("> argumentos desde terminal: ", process.argv); // es un array con todos los argumentos pasados

// Paquete filesystem que pertenece a NODE. Es necesario requerirlo
const fs = require("fs");

// Como acceder a un fichero es una operación lenta, a priori es operación asíncrona
// Veremos readFile, writeFile, stat, mkdir (versiones síncronas y asíncronas)

// readFile, lee de un fichero
fs.readFile("./modules/index.js", (err, data) => {
  if (!err) {
    console.log("> data: ", data.toString());
  } else {
    console.error("> error: ", err.message);
  }
});

// writeFile, escribe en un fichero y, si no existe, lo crea (pisa contenido)
const msg = "Hello, there!"; // podemos pasar un string directamente
const obj = { a: 1, b: 2, c: 3 }; // otros tipos de datos hay que pasarlos a string

fs.writeFile("./modules/newFile", JSON.stringify(obj), (err, data) => {
  if (err) {
    console.error("> error: ", err.message);
  } else {
    console.log("> data: ", data);
  }
});

// mkdir, crea directorios ({recursive: true} crea directorios intermedios)
fs.mkdir("./modules/modules2/modules3", { recursive: true }, (err, data) => {
  if (!err) {
    console.log("> data: ", data);
  } else {
    console.error("> error: ", err.message);
  }
});

// stat, devuelve información de un fichero o directorio
fs.stat(path, (err, data) => {
  if (!err) {
    console.log("> stat: ", data); // información completa
    console.log("> is a file: ", data.isFile()); // booleano indicando si es un fichero o no
    console.log("> is a directory: ", data.isDirectory()); // booleano indicando si es un directorio o no
  } else {
    console.error("> error: ", err.message);
  }
});

/**
 * Para evitar hacer callbacks, tenemos varias maneras evitar los callbacks
 * llamando a las mismas funciones
 *
 * 1- Usar las versiones síncronas de las funciones
 * * Esto bloquea todo el código hasta que acabe la función
 *
 * 2- Envolver, con una función genérica, la función con el callback y devolver una promesa
 * * Permite abstraer toda función de fs y trabajar con promesas
 *
 * 3- Usando la propiedad 'promises' de 'fs'.
 * * Esto devuelve promesas de manera nativa y no hay que implementar nada adicional
 */

// 1- Versiones síncronas
const result = fs.readFileSync("./modules/index.js");
console.log("> result: ", result.toString());
// =========

// 2- Envolviendo la función con una promesa de uso general
const toAsync = (fn) => (...args) =>
  new Promise((resolve, reject) =>
    fn(...args, (err, data) => (!err ? resolve(data) : reject(err.message)))
  );

toAsync(fs.readFile)("./modules/index.js")
  .then((result) => console.log("result: ", result.toString()))
  .catch((error) => console.error("> error: ", error.message));

const readWithToAsync = async () => {
  try {
    const result = (
      await toAsync(fs.readFile)("./modules/index.js")
    ).toString();
    console.log("> result: ", result);
  } catch (error) {
    console.error("> error: ", error.message);
  }
};

readWithToAsync();
// =========

// 3- Usando la promesa nativa de 'fs'

fs.promises
  .readFile("./modules/index.js")
  .then((res) => console.log("> ", res.toString()))
  .catch((err) => console.error("> err: ", err.message));

const readWithFsPromises = async () => {
  try {
    const result = (
      await fs.promises.readFile("./modules/index.js")
    ).toString();
    console.log("> result: ", result);
  } catch (error) {
    console.error("> error: ", error.message);
  }
  return "done";
};

readWithFsPromises().then((resutl) => console.log(result));
