console.log('> jorge test')
const fs = require('fs')
const tap = a => console.log(a)

// 1
const message = 'Not so rookie!'
const write = path =>
	fs.writeFile(`./${path}`, message, (err, data) =>
		err ? tap(err.message) : tap(data) )

// 2
const read = path =>
	fs.readFile(`./${path}`, (err, data) =>
		err ? tap(err.message) : tap(data.toString() ))

// 3 & 4
const receiveDirByCmd = () => {
	const path = process.argv[2]
	const trigger = process.argv[3]
	trigger === 'write' ? write(path) : read(path)
}
receiveDirByCmd()



