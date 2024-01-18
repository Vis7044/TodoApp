const express = require("express");
const mongoose = require("mongoose");


const router = express.Router();
const listModel = require("../models/listModel");
const {verifyUser} = require('../midddleware/verifyUser')
const {postTodo, getTodo,fetchOne,updateTodo, deleteTodo }  = require('../controller/listController')

//create Data
router.post("/save/:userRef", verifyUser, postTodo);

//fetch all data
router.get("/get/:userRef", verifyUser, getTodo);

//fetch single data
router.get("/getSingle/:userRef/:id",verifyUser, fetchOne);

//Update data
router.put("/update/:userRef/:id",verifyUser, updateTodo);

//Delete data
router.delete("/delete/:userRef/:id",verifyUser, deleteTodo);

module.exports = router;
