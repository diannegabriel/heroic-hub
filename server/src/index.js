const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

console.log(process.env.MONGO_URI)

const app = express();

app.get("todos", (req, res) => {});

app.listen(8080);
