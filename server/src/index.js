const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

const router = require("./router");

dotenv.config();

const app = express();

// The browser naturally prevents from hitting APIs that dont have the same domain.
// CORS allows restricted resources on web page to be accessed from another domain
app.use(cors());

// Morgan simplifies the process of logging requests to the application
app.use(morgan("dev")); // What would show on the console -> GET /login 200 0.293 ms - 6

// Built in middleware function in Express.
// It parses incoming JSON requests and puts the parsed data in req.body
app.use(express.json());
app.use(router);

const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

mongoose.connect(
  `mongodb+srv://${dbUser}:${dbPass}@goals.7srizb6.mongodb.net/goals?retryWrites=true&w=majority`
);

app.listen(8080);
