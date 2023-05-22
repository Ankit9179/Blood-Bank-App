const express = require("express");
const {
  registerController,
  loginController,
} = require("../controllers/autrController");

//router object
const router = express.Router();

//routes
//register route || POST
router.post("/register", registerController);

// login route ||POST
router.post("/login", loginController);

module.exports = router;
