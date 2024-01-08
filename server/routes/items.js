const express = require("express");
const {
  getItems,
  getItem,
  createItem,
  deleteItem,
  updateItem,
} = require("../controllers/itemController");

const router = express.Router();

//GET all items
router.get("/", getItems);

//GET one item
router.get("/:id", getItem);

//POST one item
router.post("/", createItem);

//Delete one item
router.delete("/:id", deleteItem);

//Update one item
router.patch("/:id", updateItem);

module.exports = router;
