const express = require("express");
const isLoggedIn = require("./middleware/isLoggedIn");

const router = express.Router();

router.use("/auth", require("./routes/usersRoute"));
router.get("/goals", isLoggedIn, require("./routes/readGoalsRoute"));

module.exports = router;
