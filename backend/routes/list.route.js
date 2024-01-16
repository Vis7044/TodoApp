const express = require("express");
const mongoose = require("mongoose");


const router = express.Router();
const listModel = require("../models/listModel");

//create Data
router.post("/save", (req, res, next) => {
  listModel
    .create({
      title: req.body.title,
    })
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((error) => {
      res.status(400).json({ Message: error.message });
    });
});

//fetch all data
router.get("/get", (req, res, next) => {
  listModel
    .find()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((error) => {
      res.status(400).json({ Message: error.message });
    });
});

//fetch single data
router.get("/getSingle/:id", (req, res, next) => {
  const { id } = req.params;
  listModel
    .findById({ _id: id })
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((error) => {
      res.status(400).json({ Message: error.message });
    });
});

//Update data
router.put("/update/:id", (req, res, next) => {
  const { id } = req.params;
  listModel
    .findByIdAndUpdate(id, req.body, {
      new: true,
    })
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((error) => {
      res.status(400).json({ Message: error.message });
    });
});

//Delete data
router.delete("/delete/:id", (req, res, next) => {
  const { id } = req.params;
  listModel
    .findByIdAndDelete({ _id: id })
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((error) => {
      res.status(400).json({ Message: error.message });
    });
});

module.exports = router;
