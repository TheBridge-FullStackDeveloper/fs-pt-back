// https://bit.ly/3cKjm8p

const fs = require('fs')
const tap = a => console.log(a)

// 1 ✅  6 ❌
// mkdir & writeFile ? 
const message = 'Not so rookie!'
const write = path =>
	fs.writeFile(`./${path}`, message, (err, data) =>
		err ? tap(err.message) : tap(data) )

// 2 ✅
const read = path =>
	fs.readFile(`./${path}`, (err, data) =>
		err ? tap(err.message) : tap(data.toString() ))

// 5 ✅
const itIsDir = path =>
	fs.stat(`./${path}`, (err, data) =>
		err ? tap(err.message) : tap(data.isDirectory() ))

// 7 ❌
// fs.stat -> Kb
const size = path =>
	fs.stat(`./${path}`, (err, data) =>
		err ? tap(err.message) : tap(data.size, 'k') )

// 8 ❌
const copy = path =>
tap('> copy 3 backup')

// 3 ✅ 4 ✅
// what if it is not write or read?
const receiveDirByCmd = () => {
	const path = process.argv[2]
	const trigger = process.argv[3]
	if (trigger === 'write'){
		write(path)
	} if (trigger === 'read') {
		read(path)
	} if (trigger === 'copy'){
		copy(path)
	} if (trigger === 'size'){
		size(path)
	} if (trigger === 'directory'){
		itIsDir(path)
	}
}
receiveDirByCmd()


