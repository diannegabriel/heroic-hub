const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");

dotenv.config();

const app = express();

app.use(cors());
app.use(morgan("tiny"));

app.get("todos", (req, res) => {});

app.listen(8080);
