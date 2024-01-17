const { default: mongoose } = require("mongoose");
const { errorHandler } = require("../midddleware/error");
const listModel = require("../models/listModel");
const userModel = require("../models/userModel");

module.exports.postTodo = async (req, res, next) => {
  const user = req.user;
  const list = await listModel({
    title: req.body.title,
  });

  try {
    await list.save();
    const ObjId = new mongoose.Types.ObjectId(list.id);
    await userModel.findByIdAndUpdate(
      user.id,
      {
        $push: { todo: ObjId },
      },
      { new: true }
    );
    res.status(301).json("Todo Added Successfully");
  } catch (error) {
    next(error);
  }
};

module.exports.getTodo = async (req, res, next) => {
  const user = req.user;
  console.log(user);
  userModel
    .findById({ _id: user.id })
    .populate({ path: "todo" })
    .then((result) => {
      res.status(201).json(result.todo);
    })
    .catch((error) => {
      res.status(400).json({ Message: error.message });
    });
};

module.exports.fetchOne = (req, res, next) => {
  const { id } = req.params;
  listModel
    .findById({ _id: id })
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((error) => {
      res.status(400).json({ Message: error.message });
    });
};

module.exports.updateTodo = (req, res, next) => {
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
  }

module.exports.deleteTodo = (req, res, next) => {
    const { id } = req.params;
    listModel
      .findByIdAndDelete({ _id: id })
      .then((result) => {
        res.status(201).json(result);
      })
      .catch((error) => {
        res.status(400).json({ Message: error.message });
      });
  }
