const express = require("express");

const router = express.Router();

router.use("/auth", require("./routes/usersRoute"));
router.get("/daily-goals", require("./routes/dailiesRoute"));

module.exports = router;
