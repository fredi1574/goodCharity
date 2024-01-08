const express = require("express");
const {
  getItems,
  getItem,
  createItem,
  deleteItem,
  updateItem,
} = require("../controllers/itemController");

// const Item = require("../models/itemModel");

const router = express.Router();

//GET all items
router.get("/", getItems);

// router.get("/", async (req, res) => {
//   try {
//     const items = await Item.find();
//     res.status(200).json(items);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

//GET one item
router.get("/:id", getItem);

//POST one item
router.post("/", createItem);

//Delete one item
router.delete("/:id", deleteItem);

//Update one item
router.patch("/:id", updateItem);

module.exports = router;
