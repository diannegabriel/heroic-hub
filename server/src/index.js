const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.get("todos", (req, res) => {});

app.listen(8080);
