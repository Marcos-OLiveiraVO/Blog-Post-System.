const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const app = express();
const postRouter = require("./Router/postRouter");

mongoose
  .connect(process.env.MONGO_CONNECTION_URL)
  .then((db) => console.log("Database Loaded"))
  .catch((err) => console.log(err));

app.use("/api", postRouter);

app.listen(process.env.PORT, () => console.log(`Server is running...`));
