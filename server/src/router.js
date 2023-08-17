const express = require("express");

const router = express.Router();
const app = express();


router.post("/login", require("./routes/loginRoute"));
router.use("/auth", require("./routes/usersRoute"));


module.exports = router;