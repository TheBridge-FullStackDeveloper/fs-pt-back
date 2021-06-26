const fs = require('fs');
const msg = "Not so rookie!";
const dir = __dirname;

// 1.
const writeFile = (path) => {
    fs.writeFile(path, msg, (err,data) =>{
        !err ? console.log("> data: ", data) : console.error ("> error: ", err);
    })
}

// writeFile();

// 2.
const readFile = (path) => {
    fs.readFile(path, (err,data) =>{
        !err ? console.log("> data: ", data.toString()) : console.error ("> error: ", err);
    })
}

// readFile();

// 3.
const getFileAndWriteRead = () => {
    // console.log('> argumentos desde terminal: ', process.argv)
    const [_,__,path] = process.argv;
    writeFile(path);
    readFile(path);
}

// getFileAndWriteRead();

// 4.
const getFileAndWriteRead4 = () => {
    const [_,__,path, fun] = process.argv;
    fun==="write" ? writeFile(path) : readFile(path);
}

// getFileAndWriteRead4();

// 5.
const isDir = () =>{
    const [_,__,path, dirPath] = process.argv;
    const arr = __dirname.split("\\");
    const thisDir = arr[arr.length-1];
    thisDir===dirPath ? console.log("> ", dirPath, "es un directorio") : console.log("> ", dirPath, "no es un directorio");
    
}

// isDir();

// 6.

const writeFileDir = () =>{
    const [_,__,path, fun] = process.argv;
    const pathOrigin = "./";
    const arrPath = path.split("/");
    const file = arrPath.pop() 
    const pathOk = pathOrigin.concat("", arrPath.join("/"));

    fs.mkdir(pathOk, { recursive: true }, (err, data) => {
        if(!err) {
            console.log('> data: ', data); 
            writeFile(pathOk.concat("/",file));           
        } else {
            console.error('> error: ', err.message)
        }
    })
}
writeFileDir();