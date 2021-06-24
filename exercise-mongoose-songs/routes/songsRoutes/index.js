const router = require("express").Router();
const SongsModel = require("../../models/Songs")



router.get ("/get-songs", async (req, res) => {
    const result = await SongsModel.find({})
    res.send(result)
})

router.get ("/get-random", async (req, res) => {
    const result = await SongsModel.aggregate([{ $sample: { size: 1 } }])
    res.send(result)
})

router.post('/post-a-song', async (req, res) => {
    const newBook = req.body
    const result = await SongsModel.create(newBook)
    res.send(result)

})

router.put('/update-song/:name', async (req, res) => {
    const song = req.body
    const {name} = req.params
    const result = await SongsModel.findOneAndUpdate(
        {name},
        song, 
        { new: true }
    )

    res.send(result)

})


// Crear la ruta para PUT
// Crear la ruta para DELETE


module.exports = router
// Exportar la ruta