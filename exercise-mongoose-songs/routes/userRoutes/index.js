const router = require("express").Router();
const UserModel = require("../../models/Users");

router.post("/create-user", async (req, res) => {
    try {
        const { username } = req.body;
        console.log(username);
        const result = await UserModel.create({ username });
        res.status(200).send(`Usuario ${username} creado satisfactoriamente`);
    } catch (error) {
        res.status(500).send("Ha ocurrido un error");
    }
});

router.post("/add-song", async (req, res) => {
    try {
        const { username, playlist } = req.body;
        const user = await UserModel.findOne({ username });
        playlist.forEach((e) => user.playlist.push(e));
        await user.save();
        const result = await UserModel.findOne({ username }).populate("playlist");
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send("Ha ocurrido un error");
    }
});

router.delete("/delete-a-song", async (req, res) => {
    try {
        const { username, song } = req.body;
        const user = await UserModel.findOne({ username });
        user.playlist.pull(song);
        await user.save();
        const result = await UserModel.findOne({ username }).populate("playlist");
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send("Ha ocurrido un error");
    }
});

router.get("/find-all-users", async (req, res) => {
    try {
        const result = await UserModel.find().populate("playlist");
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send("Ha ocurrido un error");
    }
});
router.get("/find-user/:username", async (req, res) => {
    try {
        const { username } = req.params;
        const result = await UserModel.findOne({ username }).populate("playlist");
        res.send(result);
    } catch (error) {
        res.status(500).send("Ha ocurrido un error");
    }
});

module.exports = router;
