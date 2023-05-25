const express = require("express");
const { inventoryController } = require("../controllers/inventoryController");

const router = express.Router();

//routes
// create inventory || POST

router.post("/create-inventory", inventoryController);

module.exports = router;
