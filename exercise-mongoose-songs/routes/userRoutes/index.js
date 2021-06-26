const router = require("express").Router();
const UserModel = require("../../models/User");

router.post("/add-song-to-playlist", async (req, res) => {
  try {
    const newUser = req.body;
    const result = await UserModel.create(newUser);
    res.status(200).json({ result });
  } catch {
    res.status(500).json({ err });
  }
});

router.get("/get-user-playlist", async (req, res) => {
  try {
    const result = await UserModel.find({}).populate("playlist");
    res.status(200).json({ result });
  } catch {
    res.status(500).json({ err });
  }
});

router.delete("/delete-song-of-playlist/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const result = await UserModel.findOneAndDelete({ _id });
    res.status(200).json({ result });
  } catch {
    res.status(500).json({ err });
  }
});

router.put("/update-user-playlist/:_id", async (req, res) => {
  try {
    const modifiedPlaylist = req.body;
    const { _id } = req.params;

    const result = await UserModel.findOneAndUpdate({ _id }, modifiedPlaylist, {
      new: true,
    });

    res.status(200).json({ result });
  } catch {
    res.status(500).json({ err });
  }
});

module.exports = router;
