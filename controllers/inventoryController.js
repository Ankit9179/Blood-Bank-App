const userModel = require("../models/userModel");
const inventoryModle = require("../models/inventoryModle");

//create inventory callback
const inventoryController = async (req, res) => {
  try {
    //validation
    const { email, inventoryType } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(500).send({
        success: false,
        message: "User not found",
        error,
      });
    }
    if (inventoryType === "in" && user.role !== "donar") {
      throw new Error("Not a doner account");
    }
    if (inventoryType === "out" && user.role !== "hospital") {
      throw new Error("Not a hospital");
    }
    //save indevtory
    const inventory = new inventoryModle(req.body);
    await inventory.save();
    return res.status(201).send({
      success: true,
      message: "new blood record success fully added",
      inventory,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error When Creating Inventory",
      error,
    });
  }
};

//get inventory callback

const getInvetoryController = async (req, res) => {
  try {
    const inventory = await inventoryModle.find({
      organisation: req.body.userId,
    });

    return res.status(200).send({
      success: true,
      message: "get all record successfully",
      inventory,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in get all inventorys",
      error,
    });
  }
};

module.exports = { inventoryController, getInvetoryController };
