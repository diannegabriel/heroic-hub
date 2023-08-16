const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");

dotenv.config();

const app = express();

// The browser naturally prevents from hitting APIs that dont have the same domain.
// CORS allows restricted resources on web page to be accessed from another domain
app.use(cors()); 

// Morgan simplifies the process of logging requests to the application
app.use(morgan("tiny")); // What would show on the console -> GET / 404 139 - 0.974 ms

app.listen(8080);
