const express = require("express");
const {
  inventoryController,
  getInvetoryController,
} = require("../controllers/inventoryController");

const router = express.Router();

//routes
// create inventory || POST

router.post("/create-inventory", inventoryController);

//get inventory || GET

router.get("/get-inventory", getInvetoryController);

module.exports = router;
