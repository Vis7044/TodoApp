const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cookie_parser = require('cookie-parser')


const app = express();
app.use(express.json());
app.use(cookie_parser())

const listRouter = require("./routes/list.route");
const authRouter = require('./routes/auth.route')


app.use('/api/auth',authRouter);
app.use('/api/list',listRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message
  })
})

mongoose
  .connect(process.env.URI)
  .then((result) => {
    console.log("Databse Connected Succesfully");
    app.listen(process.env.PORT);
  })
  .catch((error) => {
    console.log(error);
  });
