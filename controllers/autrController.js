const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");

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

module.exports = { registerController };
