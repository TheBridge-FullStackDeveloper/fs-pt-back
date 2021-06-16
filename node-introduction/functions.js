// https://bit.ly/3cKjm8p

const fs = require('fs')
const tap = a => console.log(a)

// 1  6 ❌ BUG ')'
const message = 'Not so rookie!'
const createDir = path =>{
	const dir_name = path.slice(0 ,path.lastIndexOf('/') + 1 )
	fs.mkdir(`./${dir_name})`, {recursive: true}, (err, data) =>
		err ? tap(err.message) : write(path, dir_name) )
}
const write = (path, dir_name) =>{
	const file_name = path.slice(path.lastIndexOf('/') + 1, path.length)
	fs.writeFile(`./${dir_name}/${file_name}`, message, (err, data) =>
		err ? tap(err.message) : tap(`> writefile: ${data}`) )
}

// 2
const read = path =>
	fs.readFile(`./${path}`, (err, data) =>
		err ? tap(err.message) : tap(`> read: ${data.toString()}` ))

// 5
const directory = path =>
	fs.stat(`./${path}`, (err, data) =>
		err ? tap(err.message) : tap(`> is directory?: ${data.isDirectory()}`))

// 7
const size = path =>
	fs.stat(`./${path}`, (err, data) =>
		err ? tap(err.message) : console.log(`> size:  ${data.size} bytes`) )

// 8 ❌
const copy = path =>
	tap('> copy 3 backup')

// 9 ❌
const list = path =>
	tap('> list')

// 10 ❌
const deepList = path =>
	tap('> deepList')

// 3 4
const receiveDirByCmd = () => {
	const path = process.argv[2]
	const trigger = process.argv[3]
	if (trigger === 'write'){
		createDir(path)
	} if (trigger === 'read') {
		read(path)
	} if (trigger === 'copy'){
		copy(path)
	} if (trigger === 'size'){
		size(path)
	} if (trigger === 'directory'){
		directory(path)
	} if (trigger === 'list'){
		list(path)
	} if (trigger === 'deepList'){
		deepList(path)
	}
}
receiveDirByCmd()


