## EJERCICIOS

1. En un nuevo proyecto, inicializa npm para poder tener el fichero `package.json`
2. Instala los paquetes de express y nodemon (éste último como dependencia de desarrollo)
3. Crea dos scripts npm. Uno de nombre `start` que ejecute `node index.js` y otro `dev` que ejecute `nodemon index.js`
4. Crea un fichero de constantes y exporta una variable `PORT` con valor `3000`
5. Crea un fichero `index.js` y escribe el servidor web más básico que sepas para que, cuando lancemos cualquiera de los dos scripts anteriormente creados, muestre por la consola de la terminal `> Listening at http:localhost:3000`

6. Crea, a través de un middleware de aplicación, un servidor estático que sirva una imagen que tengas en un directorio llamado `statics` a través de la ruta `/statics`

7. Crea un middleware de aplicación que muestre por consola de terminal `Client received!`
8. Crea otro middleware de aplicación que devuelva a cliente el mensaje `My first application middleware!` y haz que éste último se ejecute tras el primero
9. Crea otro middleware entre la ejecución de los dos anteriores que guarde, en algún sitio común a todos los middlewares, una propiedad `coin` con valor aleatorio `cara` o `cruz`. Recuerda llamar a `next` al final
10. Crea otro middleware que, tras leer el valor de `coin`, guarde en una propiedad igual que el ejercicio anterior un mensaje como el que sigue: `La moneda número ${number} ha salido ${coin}` (A lo mejor tienes que crear otra propiedad para almacenar el número de monedas que lanzamos)
11. Haz que se ejecuten los dos middlewares anteriores el número de veces que haga falta hasta que la moneda salga `cara` y ve concatenando el string del ejercicio anterior con el número de veces que se lanza la moneda
12. Cambia el mensaje que recibe el cliente del punto `7` para que devuelva el `string` concatenado que hemos estado guardando. (Deben lanzarse todos los middlewares que hemos creado hasta ahora)
13. Añade un tiempo de espera de un segundo entre tiradas de monedas
14. Crea dos middlewares de ruta `GET`, una para `/cara` y otra para `/cruz`. Si accedemos a `/cara`, el lanzamiento de moneda parará cuando saquemos `cara` y si accedemos a `cruz` el lanzamiento parará cuando saquemos `cruz`.
15. Crea un middleware de ruta `POST` bajo la ruta `/coins` que tenga, en el `body` de la petición lo siguiente:
```js
{
    "amount": 3
}
```
Tras leer la cantidad de monedas, deberás lanzar (a través de llamar a los middlewares correspondientes creados anteriormente) la moneda tantas veces como indique el valor de `amount` y devolver en formato `JSON` con `status 200` el mensaje de todos los lanzamientos concatenados que vimos anteriormente.
Ejemplo de lo que nos devuelve:
```js
{
    success: true,
    data: `
        La moneda número 1 ha salido cara.
        La moneda número 2 ha salido cara.
        La moneda número 3 ha salido cruz.
    `
}
```
