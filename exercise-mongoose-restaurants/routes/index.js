const router = require("express").Router();

router.use("/restaurants", require("./restaurants"));

module.exports = router;