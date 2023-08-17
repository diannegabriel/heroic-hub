const express = require("express");

const router = express.Router();
const app = express();

router.use("/auth", require("./routes/usersRoute"));


module.exports = router;