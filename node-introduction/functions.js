console.log('> ')
const fs = require('fs')
const tap = a => console.log(a)


// 1
const message = 'Not so rookie!'
const createTestFile = path =>
	fs.writeFile(`./${path}`, message, (err, data) =>
		err ? tap(err.message) : readTestFile(path) )

// 2
const readTestFile = path =>
	fs.readFile(`./${path}`, (err, data) =>
		err ? tap(err.message) : tap(data.toString() ))


// 3
const receiveDirByCmd = () => {
	const input = process.argv[2]
	createTestFile(input)
}
receiveDirByCmd()

