const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const { errorHandler } = require("../midddleware/error");
const jwt = require("jsonwebtoken");

module.exports.signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);

  try {
    const user = new User({
      username,
      email,
      password: hashedPassword,
    });
    await user.save();
    res.status(201).json("User Created Successfully");
  } catch (error) {
    next(error);
  }
};

module.exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser) return next(errorHandler(400, "Email not found! signup first"));

    const isValid = bcrypt.compareSync(password, existingUser.password);

    if (!isValid) return next(errorHandler(401, "Invalid Password"));

    const token = jwt.sign(
      { id: existingUser._id },
      process.env.JWT_SECRET_KEY
    );

    const { password: pass, ...rest } = existingUser._doc;

    res.cookie("access_token", token, { httpOnly: true, secure: true }).status(201).json({rest});

  } catch (error) {
    return next(error);
  }
};



