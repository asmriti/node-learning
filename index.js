const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

app.use(bodyParser.json());

// MIDDLEWARE
// app.use("/posts", () => {
//   console.log("THIS IS A MIDDLEWARE");
// });

// IMPORT ROUTES
const postRoutes = require("./routes/posts");
app.use("/posts", postRoutes);

// ROUTES
app.get("/", (req, res) => {
  res.send("& WE ARE HOME");
});

app.get("/posts", (req, res) => {
  res.send("& WE ARE ON POSTS");
});

// CONNECT TO DB

mongoose.connect(process.env.DB_CONNECTION);

const user = require("./models/userModel");

app.listen(3000);
