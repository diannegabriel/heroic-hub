const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

const router = require("./router")

dotenv.config();

const app = express();

// The browser naturally prevents from hitting APIs that dont have the same domain.
// CORS allows restricted resources on web page to be accessed from another domain
app.use(cors()); 

// Morgan simplifies the process of logging requests to the application
app.use(morgan("dev")); // What would show on the console -> GET /login 200 0.293 ms - 6

mongoose.connect("");

app.use(router);

app.listen(8080);
