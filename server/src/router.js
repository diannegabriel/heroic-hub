const express = require("express");
const isLoggedIn = require("./middleware/isLoggedIn");

const router = express.Router();

router.use("/auth", require("./routes/usersRoute"));
router.get("/dailies", isLoggedIn, require("./routes/readDailiesRoute"));

module.exports = router;
