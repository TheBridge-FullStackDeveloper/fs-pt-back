const fs = require('fs')
const pathmaker = require('path')

const [_, __, path, flag, n, newPath, filename] = process.argv

console.info(">>>>Bienvenido al servicio de gestión de archivos mas guay del mundo mundial")
console.info(">>>>Lista de instrucciones válidas")
console.info("write (crea archivo en directorio (creado o no), e imprime su contenido en consola)")
console.info("directory (muestra si la ruta pasada por consola es un directorio o un archivo)")
console.info("size (muestra el tamaño de un fichero o directorio")
console.info("||||||||||||||||||||||||||||||||||||||||||||||||||||")


// 1. Crea una función en un fichero 'functions.js' que escriba en un fichero 'test' dentro del mismo directorio donde estás el mensaje: "Not so rookie!"

const writeFn = async (path, msg) => {
    await fs.promises.writeFile(path, msg)
    console.info(">Función writeFn completada")

}
// const writeTest = writeFn(pathmaker.join(__dirname, "test"), "Not so rookie!")



// 2. Crea una función en el mismo fichero 'function.js' que lea el contenido del fichero 'test' y lo muestre por consola

const readFn = async (file) => {
    const myFile = await fs.promises.readFile(file)
    console.info(`>Contenido del fichero: ${myFile.toString()}`)

}

// const readTest = readFn("./test")

// 3. Crea una función en el mismo fichero que reciba el directorio a través de comandos y haga la escritura
// y lectura con las funciones que ya hemos escrito.
// - Ejemplo de entrada por consola: node functions.js test

// 4. Modifica la función que acabas de crear para que, además de recibir el fichero reciba también la función que queramos que se lance.
// - Ejemplo de entrada por consola: node functions.js test write



const writeAndRead = async (path, flag) => {
    if (flag === "write") {
        await fs.promises.mkdir(pathmaker.dirname(path), {recursive: true})
        console.info('>Directorio nuevo creado')
        writeFn(path, "Texto de prueba")
        readFn(path)
        console.info('>Funcion writeAndRead finalizada')
    } else {
        console.info("__Función writeAndRead no ejecutada, falta instrucción valida")
    }
}

writeAndRead(path, flag)

// 5. Crea una función en el mismo fichero que te devuelva si el argumento que le pasas es un directorio o no. También debe ser ejecutable desde entrada por consola.
// - Ejemplo: node functions.js test directory

const directoryCheker = async (path, flag) => {
    if (flag === "directory") {
        const myStats = await fs.promises.stat(path)
        myStats.isFile() ? console.info(">La ruta corresponde a un fichero") : console.info(">La ruta corresponde a un directorio")
       
    } else {
        console.info("__Función directoryCheker no ejecutada, falta instrucción valida")
    }
}

directoryCheker(path, flag)
// 6. Haz los cambios pertinentes para que la función de escritura en fichero sea capaz de crear el fichero en rutas diferentes a la actual que no existan.
// - Ejemplo: node functions.js tmp/test2 write (La carpeta 'tmp' no debe existir en el momento de lanzar la función)


// DONE!!! (function writeandRead, instruction write)

// 7. Haz una función en el mismo fichero que te indique el peso de una ruta que le pases por argumentos
// de consola. Haz la conversión pertinente a bytes, kb, mb o gb para evitar que el número sea demasiado
// pequeño o demasiado grande.
// - Ejemplo: node functions.js tmp/test2 size | Respuesta: 4032bytes o 4kb


const convertBytes = (bytes) => {
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"]
    if (bytes === 0) {
      return "n/a"
    }
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))
    if (i === 0) {
      return bytes + " " + sizes[i]
    }
    return (bytes / Math.pow(1024, i)).toFixed(1) + " " + sizes[i]
  }

const sizeFn = async (path, flag) => {
    if (flag === "size") {
        const stats = await fs.promises.stat(path)
        console.info(">El peso del fichero o directorio es de: ", convertBytes(stats.size))
    } else {
        console.info("__Función sizeFn no ejecutada, falta instrucción valida")
    }

}


sizeFn(path, flag)


//PENDING!!!!!!!!!

// 8. Haz una función en el mismo fichero que haga copias de seguridad del fichero que reciba por argumentos junto con el número de copias que debe hacer. Además se deberá indicar el directorio donde queremos que se hagan las copias de seguridad (contempla la posibilidad de que no exista el directorio). Si no se establece ningún directorio deberán realizarse en el directorio actual. Si no se especifica ningún número de copias, no hará ninguna.
// - Ejemplo: node functions.js tmp/test copy 3 backup

// const [_, __, path, flag, filename, n, newPath] = process.argv

const makeBackup = async (path, flag, n, newPath, filename) => {
    let myFileName 
    if (flag === "backup") {
        if (!n) {
            console.log(">No se ha realizado ninguna copia")
        }

        if (filename) {
            myFileName = filename
        } else {
            myFileName = __filename
        }
        
        if (!newPath) {

            for (let i=0; i<= n; i++) {
                await fs.promises.copyFile(path, `${myFileName}_${i}`)
            }
            console.info(`>Creadas ${n} copias de seguridad en la ruta del archivo de origen`)
            
        }
        if (newPath) {
            await fs.promises.mkdir(newPath, { recursive: true })
            for (let i = 1; i <= n; i++) {
                await fs.promises.copyFile(path, pathmaker.join(newPath, `${myFileName}_${i}`))
            }
            console.info(`>Creadas ${n} copias de seguridad en la ruta introducida por el usuario`)
    
        }

    } else {
        console.info("__Función makeBackup no ejecutada, falta instrucción valida")
    }
}

makeBackup(path, flag, n, newPath, filename)
// const makeBackup = async (file, newName, n, destination) => {
//     if(!n) {
//         console.log("NO SE HA HECHO NINGUNA COPIA")
//     }
//     if(!path) {
//         for (let i = 1; i <= n; i++) {
//             await fs.promises.copyFile(file, `${newName}_${i}`)
//         }
//     }
    // if (path) {
    //     await fs.promises.mkdir(destination, { recursive: true })
    //     for (let i = 1; i <= n; i++) {
    //         await fs.promises.copyFile(file, `${destination}/${newName}_${i}`)
    //     }

    // } vv
    
// }

// makeBackup(path)




// ## EXTRAS

// 9. Haz una función a la que le pases una ruta y te devuelva el número de ficheros, el número de directorios y el peso total de los fichero SOLO de ese nivel. No hay que profundizar en las carpetas.
// Si le pasamos un fichero, debería devolvernos un mensaje diciendo que no es un directorio.
// - Ejemplo: node functions.js tmp list | Respuesta: 12 files | 2 directories | size: 1.19mb

// 10. Haz otra función que extienda la funcionalidad de la anterior. Esta vez deberá profundizar en cada
// directorio que se encuentre hasta haber sumado todos los ficheros y sus pesos desde el directorio pasado
// por argumentos. Si le pasamos un fichero, debería devolvernos un mensaje diciendo que no es un directorio
// - Ejemplo: node functions.js tmp deepList | Respuesta: 132 files | 15 directories | size 2.34gb