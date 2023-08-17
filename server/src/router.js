const express = require("express");

const router = express.Router();

router.use("/auth", require("./routes/usersRoute"));

module.exports = router;
