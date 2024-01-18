const { default: mongoose } = require("mongoose");
const { errorHandler } = require("../midddleware/error");
const listModel = require("../models/listModel");
const userModel = require("../models/userModel");

module.exports.postTodo = async (req, res, next) => {
  if(req.user.id !== req.params.userRef) return next(errorHandler(404, 'You are not allowed to save to others todo'))
  const list = await listModel({
    title: req.body.title,
    userRef: req.params.userRef
  });
  try {
    await list.save();
    res.status(301).json("Todo Added Successfully");
  } catch (error) {
    next(error);
  }
};

module.exports.getTodo = async (req, res, next) => {
  if(req.user.id !== req.params.userRef) return next(errorHandler(404, 'You are not allowed to see others todo'))
  listModel
    .find({ userRef: req.params.userRef})
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((error) => {
      res.status(400).json({ Message: error.message });
    });
};

module.exports.fetchOne = (req, res, next) => {
  if(req.user.id !== req.params.userRef) return next(errorHandler(404, 'You are not allowed to see others todo'))

  listModel
    .findById({ _id: req.params.id })
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((error) => {
      res.status(400).json({ Message: error.message });
    });
};

module.exports.updateTodo = (req, res, next) => {
  if(req.user.id !== req.params.userRef) return next(errorHandler(404, 'You are not allowed to update others todo'))
    const { id, userRef } = req.params;
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
  }

module.exports.deleteTodo = (req, res, next) => {
  if(req.user.id !== req.params.userRef) return next(errorHandler(404, 'You are not allowed to delete others todo'))
  const { id, userRef } = req.params;
    listModel
      .findByIdAndDelete({ _id: id })
      .then((result) => {
        res.status(201).json(result);
      })
      .catch((error) => {
        res.status(400).json({ Message: error.message });
      });
  }
