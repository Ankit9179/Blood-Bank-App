const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//register
const registerController = async (req, res) => {
  try {
    const exisitingUser = await userModel.findOne({ email: req.body.email });

    //validation
    if (exisitingUser) {
      return res.status(200).send({
        success: false,
        message: "User Already exisits",
      });
    }

    //hashPassword
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;

    //rest data and save user
    const user = new userModel(req.body);
    await user.save();
    return res.status(201).send({
      success: true,
      message: "User registerd successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error from register api",
      error,
    });
  }
};

////login call back || POST
const loginController = async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.body.email });

    //user validation
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "invalid credentials",
      });
    }

    //compare password
    const comparePassword = await bcrypt.compare(
      req.body.password,
      user.password
    ); //check again

    if (!comparePassword) {
      return res.status(500).send({
        success: false,
        message: "invalid credentials",
      });
    }

    //generate token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    }); //jwt.sign(payload, secretOrPrivateKey, [options, callback])
    return res.status(200).send({
      success: true,
      message: "User login successfully",
      token,
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error from login api",
      error,
    });
  }
};

//currentUserController
const currentUserController = async (req, res) => {
  try {
    const user = await userModel.findOne({ _id: req.body.userId });
    return res.status(200).send({
      success: true,
      message: "User fatched successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Unable to get current user",
      error,
    });
  }
};

module.exports = { registerController, loginController, currentUserController };
