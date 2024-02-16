const AppError = require("../utils/appError");
const cathcAsync = require("../utils/catchAsync");
const User = require("../model/userModel");
const jwt = require("jsonwebtoken");

exports.createUser = async (req, res) => {
  // const todoData = req.body;
  // const newTodo = await Todo.create(todoData);
  // // Response route not yet created
  // res.status(201).json({ success: true, data: newTodo });
};

exports.getUsers = async (req, res, next) => {
  const users = await User.find().populate({
    path: "conversations",
    model: "Conversation",
    populate: {
      path: "messages",
      model: "Message",
    },
  });
  res.status(200).json({
    status: "success",
    users,
  });
};
exports.getUser = cathcAsync(async (req, res, next) => {
  const user = await User.findById(req.user.id).populate({
    path: "conversations",
    model: "Conversation",
    populate: {
      path: "messages",
      model: "Message",
    },
  });
  if (!user) {
    return next(new AppError("User does not exist", 404));
  }
  res.status(200).json({
    status: "success",
    user,
  });
});
exports.verifyUser = cathcAsync(async (req, res, next) => {
  const decoded = jwt.verify(req.params.id, process.env.JWT_SECRET);
  console.log(decoded);
  const user = await User.findById(decoded.id);
  if (!user) {
    return next(new AppError("Invalid JWT", 401));
  }
  res.status(200).json({
    status: "success",
    user,
  });
});
