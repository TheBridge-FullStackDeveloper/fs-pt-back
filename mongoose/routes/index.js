const router = require("express").Router();

/* En esta linea estamos utilizando el use() donde como primer parametro 
le pasamos el path para URL y como segundo parametro el fichero*/
router.use('/books', require("./booksRoutes"));
router.use('/libraries', require("./librariesRoutes"));

module.exports = router;
