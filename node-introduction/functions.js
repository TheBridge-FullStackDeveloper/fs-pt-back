// https://bit.ly/3cKjm8p

const fs = require('fs')
const tap = a => console.log(a)
const message = 'Not so rookie!'

// 6
// bug ')' dir
const create = path =>{
	if (path.includes('/')){
		const dir_name = path.slice(0 ,path.lastIndexOf('/') + 1)
		fs.mkdir(`./${dir_name})`, {recursive: true}, (err, data) =>
			err ? tap(err.message) : write(path, dir_name) )
	} else {
		write(path, '_')
	}
}
// 1
const write = (path, dir_name) =>{
	const file_name = path.slice(path.lastIndexOf('/') + 1, path.length)
	fs.writeFile(`./${dir_name}${file_name}`, message, (err, data) =>
		err ? tap(err.message) : tap(`> writeFile: ${data}`) )
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

// 8
// fs-extra // promises.copyFile // is not copying, is creating
const copy = path =>{
	const backup_number = process.argv[4]
	const backup_dir = process.argv[5]
	if (backup_number > 0){
		if (!backup_dir){
			for (i = 0; i < backup_number; i++){
				create(`_copy${i + 1}_${path}`)
			}
		} else {
			for (i = 0; i < backup_number; i++){
				create(`${backup_dir}/_copy${i + 1}_${path}`)
			}
		}
	} else {
		tap('Backup error')
	}
}

// 9 ❌
const list = path =>
	tap('> list to be developed')

// 10 ❌
const deepList = path =>
	tap('> deepList to be developed')

// 3 4
const receiveDirByCmd = () => {
	const path = process.argv[2]
	const trigger = process.argv[3]
	if (trigger === 'write'){
		create(path)
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