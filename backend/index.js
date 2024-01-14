const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
// const cors = require("cors");

const app = express();
// app.use(cors());
app.use(express.json());

const userRouter = require("./routes/UserRoute");

app.use('/api/user',userRouter);

mongoose
  .connect(process.env.URI)
  .then((result) => {
    console.log("Databse Connected Succesfully");
    app.listen(process.env.PORT);
  })
  .catch((error) => {
    console.log(error);
  });
