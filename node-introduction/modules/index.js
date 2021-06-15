// exports es un objeto y es referencia de module.exports
console.log('> exports: ', exports)
exports.red = 'red'
exports.yellow = 'yellow'
exports.blue = 'blue'

// Si añadimos propiedades a module.exports, se añadirán también en exports
module.exports.purple = 'purple'

// Son estrictamente iguales porque comparten referencia
console.log('> are equal? ', exports === module.exports)

// Pero si sobreescribimos module.exports, cortará la referencia con exports
module.exports = () => ~~(Math.random() * 100)

// SIEMPRE se exporta module.exports

console.log('> exports: ', exports)
console.log('> module.exports: ', module.exports)

// Son estrictamente no iguales porque ya no comparten la referencia
console.log('> are equal? ', exports === module.exports)