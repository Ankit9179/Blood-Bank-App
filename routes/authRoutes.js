const express = require("express");
const {
  registerController,
  loginController,
  currentUserController,
} = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");

//router object
const router = express.Router();

//routes
//register route || POST
router.post("/register", registerController);

// login route ||POST
router.post("/login", loginController);

// current user || get
router.get("/current-user", authMiddleware, currentUserController);

module.exports = router;
