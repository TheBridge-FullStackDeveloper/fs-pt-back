# Restaurants 馃嵔

El objetivo de este ejercicio es crear un aplicaci贸n para poder consultar los restaurantes de New York.

La colecci贸n de restaurantes esta en `restaurants.json`

## Server
Crear un servidor **DESDE ZERO** dentro del path `exercise-mongoose-restaurants`. Tendr谩s que ser tu a crear la estructura de las carpetas, crear el `package.json`, nombrar los ficheros, instalar los paquetes, crear modelos, dar los nombres a la BBDD y a las colecciones.

鈿狅笍 Puntos fundamentales:

1. Crea un `seed.js` para importar los restaurantes (del `./restaurant.json`) en la BBDD

2. Crear rutas para poder efectuar un CRUD de la colecci贸n de restaurantes

## Bonus 馃弳

Crea una ruta para poder efectuar estas queries:

1. Muestra todos los restaurantes en el barrio de Manhattan

2. Muestra todos los restaurantes en los barrios de Queens y Brooklyn

3. Muestra todos los restaurantes de comida americana

4. Muestra todos los restaurantes de comida americana en el barrio de Queens

5. Muestra solo los nombres de los restaurantes de comida Jewish/Kosher

6. Muestra solo los 10 primeros restaurantes

7. Muestra todos los restaurantes cuyo c贸digo postal sea 11374

8. Muestra todos los restaurantes que tengan grado A y dos puntuaciones (scores = 2)

9. Muestra los nombres y el c贸digo postal de todos los restaurantes cuyo c贸digo postal sea inferior a 10500 y ordenados de mayor a menor (por c贸digo postal)