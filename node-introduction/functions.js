// https://bit.ly/3cKjm8p
const { dir } = require('console')
const fs = require('fs')
const tap = a => console.log(a)
const message = 'Not so rookie!'

// 1 6
const create = (path, dir_name, file_name) =>{
	if (path.includes('/')){
		const write = (dir_name) =>
		fs.writeFile(`./${dir_name}${file_name}`, message, (err, data) =>
			err ? tap(err.message) : tap(`> writeFile: ${data}`) )
		fs.mkdir(`./${dir_name}`, {recursive: true}, (err, data) =>
			err ? tap(err.message) : write(dir_name) )
	} else {
		fs.writeFile(`./${file_name}`, message, (err, data) =>
			err ? tap(err.message) : tap(`> writeFile: ${data}`) )
	}
}
// 2
const read = path =>
	fs.readFile(`./${path}`, (err, data) =>
		err ? tap(err.message) : tap(`> read: ${data.toString()}` ))
// 5
const directory = path =>
	fs.stat(`./${path}`, (err, data) =>
		err ? tap(err.message) : data.isDirectory() )
// 7
const size = path =>
	fs.stat(`./${path}`, (err, data) =>
		err ? tap(err.message) : tap(`> size:  ${data.size} bytes`) )
// 8
const copy = (file_name, backup_dir, backup_number) =>{
	if (backup_number > 0){
		if (!backup_dir){
			for (i = 0; i < backup_number; i++){
				create(`${file_name}_${i + 1}`)
			}
		} else {
			for (i = 0; i < backup_number; i++){
				create(`${backup_dir}/${file_name}_${i + 1}`)
			}
		}
	} else {
		tap('Backup error')
	}
}

// 9 ❌
const list = async (path) => {
	try{
	// IF === TRUE ❌
	fs.stat(`./${path}`, (err, data) =>
		err ? tap(err.message) : tap(data.isDirectory() ))

	// KB IN THIS DIR ❌
	fs.stat(`./${path}`, (err, data) =>
		err ? tap(err.message) : tap(data.size) )

	// TOTAL NUMBER OF FILES ❌
	fs.readdir(`./${path}`, (err, data) =>
		err ? tap(err.message) : tap(data) )

	// TOTAL NUMBER OF DIR
	fs.readdir(`./${path}`, (err, data) =>
		err ? tap(err.message) : data.forEach(e => tap(e) ) ) // no permite manipular
	
		// ELSE 'IS NOT A DIRECTORY'
	tap('UPSIE')

	} catch (error){
		tap(error.message)
	}
}
// 10 ❌
const deepList = path =>
	tap('> deepList to be developed')

// 3 4
const start = () => {
	const path = process.argv[2]
	const trigger = process.argv[3]
	const backup_dir = process.argv[5]
	const backup_number = process.argv[4]
	const dir_name = path.slice(0 ,path.lastIndexOf('/') + 1)
	const file_name = path.slice(path.lastIndexOf('/') + 1, path.length)
	if (trigger === 'write'){
		create(path, dir_name, file_name)
	} if (trigger === 'read') {
		read(path)
	} if (trigger === 'copy'){
		copy(file_name, backup_dir, backup_number)
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
start()