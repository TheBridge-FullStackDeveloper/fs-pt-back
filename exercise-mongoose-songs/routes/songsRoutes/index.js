const router = require("express").Router();
const SongsModel = require("../../models/Songs")

router.get("/get-songs", async (req, res) => {
    try {
        const result = await SongsModel.find({})
        res.status(200).send(result)

    } catch (error) {
        res.status(500).send("Ha habido un error")
    }
})

router.get("/get-random", async (req, res) => {
    try {
        const result = await SongsModel.aggregate([{ $sample: { size: 1 } }])
        res.status(200).send(result)

    } catch (error) {
        res.status(500).send("Estamos trabajando en ello")
    }
})

router.post('/post-a-song', async (req, res) => {

    try {
        const newSong = req.body
        console.log(newSong)
        const result = await SongsModel.create(newSong)
        res.status(200).send(result)

    } catch (error) {
        res.status(500).send("La has liado pedrín")
    }

})

router.put('/update-song-name', async (req, res) => {

    try {
        const { youtube_id, name } = req.body
        const result = await SongsModel.findOneAndUpdate(
            youtube_id,
            { name },
            { new: true }
        )
        res.status(200).send(result)

    }

    catch (error) {
        res.status(500).send("Algo va mal")

    }

})

router.delete('/delete-song', async (req, res) => {

    try {
        const { _id } = req.body
        const result = await SongsModel.findOneAndDelete({ _id })
        res.status(200).send("Canción Eliminada", _id, result)
        
    } catch (error) {
        res.status(500).send("Algo ha pasado")
    }
})

module.exports = router
