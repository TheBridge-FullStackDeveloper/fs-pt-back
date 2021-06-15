console.log('> ')
const fs = require('fs')
const tap = a => console.log(a)

// 1
const message = 'Not so rookie!'
const createTestFile = () =>
	fs.writeFile('./test', message, (err, data) =>
			err ? tap(err.message) : tap(data))
createTestFile()

// 2
const readTestFile = () =>
	fs.readFile('./test', (err, data) =>
		err ? tap(err.message) : tap(data.toString() ))
readTestFile()

// 3
const receiveDirByCmd = () =>
	tap('3. hola ')
receiveDirByCmd()

