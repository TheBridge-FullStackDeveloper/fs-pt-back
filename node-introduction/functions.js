console.log('> hola')


const fs = require('fs')


//1
const message = 'Not so rookie'
const createtestFile = () =>{
	fs.writeFile('./test', message, ((err, data) =>{
			if (!err){
					console.log(data)
			} else {
					console.log(err.message)
			}
	}))
}
createtestFile()