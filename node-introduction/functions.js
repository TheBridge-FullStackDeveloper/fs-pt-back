
console.log('> starting ...')
const fs = require('fs')
const tap = a => console.log(a)

// 6
// mkdir & writeFile ? 
// mkdir {recursive} ?

// 1
const message = 'Not so rookie!'
const write = path =>
	fs.writeFile(`./${path}`, message, (err, data) =>
		err ? tap(err.message) : tap(data) )

// 7
// fs.stat -> Kb


// 8
// copy 3 backup


// 2
const read = path =>
	fs.readFile(`./${path}`, (err, data) =>
		err ? tap(err.message) : tap(data.toString() ))

// 5
// if true, write and read function wont work
const itIsDir = path =>{
	fs.stat(`./${path}`, (err, data) =>
		err ? tap(err.message) : tap(data.isDirectory() ))
}

// 3 & 4
// what if it is not write or read?
const receiveDirByCmd = () => {
	const path = process.argv[2]
	const trigger = process.argv[3]
	if (trigger === 'write'){
		write(path)
	} if (trigger === 'read') {
		read(path)
	}
	itIsDir(path)
}
receiveDirByCmd()


