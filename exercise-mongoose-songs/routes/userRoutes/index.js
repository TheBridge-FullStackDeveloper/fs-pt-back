const router = require("express").Router();
const UserModel = require("../../models/User");
const SongModel = require("../../models/Songs");

router.post("/create-user", async (req, res) => {
  try {
    const newUser = req.body;
    const result = await UserModel.create(newUser);
    res.status(200).json({ result });
  } catch (err) {
    res.status(500).json({ err });
  }
});

router.put("/users/:_id/add-song/:songid", async (req, res) => {
  try {
    const { _id, songid } = req.params;
    const user = await UserModel.findOne({ _id });
    user.playlist.push(songid);

    const result = await UserModel.findOneAndUpdate({ _id }, user, {
      new: true,
    });
    res.status(200).json({ result });
  } catch (err) {
    res.status(500).json({ err });
  }
});

router.get("/get-user-playlist", async (req, res) => {
  try {
    const result = await UserModel.find({}).populate("playlist");
    res.status(200).json({ result });
  } catch (err) {
    res.status(500).json({ err });
  }
});

router.delete("/delete-user/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const result = await UserModel.findOneAndDelete({ _id });
    res.status(200).json({ result });
  } catch (err) {
    res.status(500).json({ err });
  }
});

router.put("/update-user/:_id", async (req, res) => {
  try {
    const modifiedUser = req.body;
    const { _id } = req.params;

    const result = await UserModel.findOneAndUpdate({ _id }, modifiedUser, {
      new: true,
    });

    res.status(200).json({ result });
  } catch (err) {
    res.status(500).json({ err });
  }
});

module.exports = router;
