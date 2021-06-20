const fs = require("fs");

// 1   Crea una función en un fichero 'functions.js' que escriba en un fichero
//'test' dentro del mismo directorio donde estás el mensaje: "Not so rookie!"

const writeInNewFile = (file, msg) => {
  fs.writeFile(file, msg.toString(), (err, data) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log(data);
    }
  });
};
writeInNewFile("test", "Not so rookie!");

// 2   Crea una función en el mismo fichero 'function.js' que lea el contenido del fichero 'test' y lo muestre por consola

const read = (file) => {
  fs.readFile(file, (err, data) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log(data.toString());
    }
  });
};

read("./test");

// 3   Crea una función en el mismo fichero que reciba el fichero como argumento a través de la línea de comandos y
// haga la escritura y lectura con las funciones que ya hemos escrito.

const getThroughCommands = () => {
  const [_, __, path] = process.argv;
  writeInNewFile(path, "Ejercicio 3");
  read(path);
};

getThroughCommands();

// 4   Modifica la función que acabas de crear para que, además de recibir el fichero reciba
// también la función que queramos que se lance.

const getThroughCommands2 = () => {
  const [_, __, path, fun] = process.argv;
  switch (fun) {
    case "write":
      writeInNewFile(path, "ejercicio 4");
      break;
    case "read":
      read(path);
      break;
  }
};

getThroughCommands2();

// 5  Crea una función en el mismo fichero que te devuelva si el argumento que le pasas es un directorio o no.
//    También debe ser ejecutable desde entrada por consola.

const isDir = (arg) => {
  fs.promises
    .stat(arg)
    .then((res) => console.log(res.isDirectory()))
    .catch((err) => console.log(err.message));
};

isDir(process.argv[2]);

// 6    Haz los cambios pertinentes para que la función de escritura en fichero sea capaz de crear el fichero en
//     rutas diferentes a la actual que no existan.

const writeInNewDir = (route, msg) => {
  let pathSplited = route.split("/");
  pathSplited.pop();
  pathSplited = pathSplited.join("/");
  fs.promises
    .mkdir(pathSplited, { recursive: true })
    .then((res) => fs.promises.writeFile(route, msg.toString()))
    .catch((err) => console.log(err.message));
};

writeInNewDir("nested/directory/file", "ejercicio 6");

// 7   Haz una función en el mismo fichero que te indique el peso de una ruta que le pases por argumentos de consola.
//    Haz la conversión pertinente a bytes, kb, mb o gb para evitar que el número sea demasiado pequeño o demasiado grande.

const sizeOf = (route) => {
  fs.promises
    .stat(route)
    .then((res) => console.log(res.size))
    .catch((err) => console.log("error"));
};
sizeOf(process.argv[2]);

// 8   Haz una función en el mismo fichero que haga copias de seguridad del fichero que reciba por argumentos junto
//    con el número de copias que debe hacer. Además se deberá indicar el directorio donde queremos que se hagan las
//    copias de seguridad (contempla la posibilidad de que no exista el directorio). Si no se establece ningún directorio
//    deberán realizarse en el directorio actual. Si no se especifica ningún número de copias, no hará ninguna.

const fn8 = async (file, num, dir) => {
  const backupDir = dir || __dirname;
  try {
    if (!fs.existsSync(backupDir)) {
      await fs.promises.mkdir(backupDir, { recursive: true });
    }
    for (let i = 0; i < num; i++) {
      await fs.promises.copyFile(file, `${backupDir}/${file}-copy${i + 1}`);
    }
  } catch (error) {
    console.error("> error: ", error.message);
  }
};

fn8(process.argv[2], process.argv[3], process.argv[4]);
