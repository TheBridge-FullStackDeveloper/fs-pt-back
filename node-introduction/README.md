## EJERCICIOS

1. Crea una función en un fichero 'functions.js' que escriba en un fichero 'test' dentro del mismo directorio donde estás el mensaje: "Not so rookie!"

2. Crea una función en el mismo fichero 'function.js' que lea el contenido del fichero 'test' y lo muestre por consola

3. Crea una función en el mismo fichero que reciba el directorio a través de comandos y haga la escritura
y lectura con las funciones que ya hemos escrito.
- Ejemplo de entrada por consola: node functions.js test

4. Modifica la función que acabas de crear para que, además de recibir el fichero reciba también la función que queramos que se lance.
- Ejemplo de entrada por consola: node functions.js test write

5. Crea una función en el mismo fichero que te devuelva si el argumento que le pasas es un directorio o no. También debe ser ejecutable desde entrada por consola.
- Ejemplo: node functions.js test directory

6. Haz los cambios pertinentes para que la función de escritura en fichero sea capaz de crear el fichero en rutas diferentes a la actual que no existan.
- Ejemplo: node functions.js tmp/test2 write (La carpeta 'tmp' no debe existir en el momento de lanzar la función)

7. Haz una función en el mismo fichero que te indique el peso de una ruta que le pases por argumentos
de consola. Haz la conversión pertinente a bytes, kb, mb o gb para evitar que el número sea demasiado
pequeño o demasiado grande.
- Ejemplo: node functions.js tmp/test2 size | Respuesta: 4032bytes o 4kb

8. Haz una función en el mismo fichero que haga copias de seguridad del fichero que reciba por argumentos junto con el número de copias que debe hacer. Además se deberá indicar el directorio donde queremos que se hagan las copias de seguridad (contempla la posibilidad de que no exista el directorio). Si no se establece ningún directorio deberán realizarse en el directorio actual. Si no se especifica ningún número de copias, no hará ninguna.
- Ejemplo: node functions.js tmp/test copy 3 backup

## EXTRAS

9. Haz una función a la que le pases una ruta y te devuelva el número de ficheros, el número de directorios y el peso total de los fichero SOLO de ese nivel. No hay que profundizar en las carpetas.
Si le pasamos un fichero, debería devolvernos un mensaje diciendo que no es un directorio.
- Ejemplo: node functions.js tmp list | Respuesta: 12 files | 2 directories | size: 1.19mb

10. Haz otra función que extienda la funcionalidad de la anterior. Esta vez deberá profundizar en cada
directorio que se encuentre hasta haber sumado todos los ficheros y sus pesos desde el directorio pasado
por argumentos. Si le pasamos un fichero, debería devolvernos un mensaje diciendo que no es un directorio
- Ejemplo: node functions.js tmp deepList | Respuesta: 132 files | 15 directories | size 2.34gb