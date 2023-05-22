const express = require("express");
const { registerController } = require("../controllers/autrController");

//router object
const router = express.Router();

//routes
//register route
router.post("/register", registerController);

module.exports = router;
