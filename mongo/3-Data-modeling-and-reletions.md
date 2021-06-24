# Data Modeling

## Introduction

Los modelos de datos efectivos respaldan las necesidades de su aplicación. La consideración clave para la estructura de sus documentos es la decisión de incrustar o utilizar referencias.

En mongo no es requerido crear "Schemas" para los documentos. Así que:

- No estamos obligados que los documentos de una misma colección tengan los mismos campos
- Podemos modificar, remover, añadir nuevos campos y cambiar la estructura de los documentos en una misma colección

## Embedded Data Models

Hablamos de modelo incorporado cuando los datos estan incorporados en un mismo decumento de un colleccion. Este "schema" es conocido como "denormalized".

![data-model-embedded](https://docs.mongodb.com/manual/images/data-model-denormalized.bakedsvg.svg)

## Normalized Data Models

Los modelos de datos normalizados describen relaciones utilizando referencias entre documentos.

![data-model-normalized](https://docs.mongodb.com/manual/images/data-model-normalized.bakedsvg.svg)
