const mongoose = require("mongoose");
const Item = require("../models/itemModel");

// GET all items
const getItems = async (req, res) => {
  try {
    const items = await Item.find().sort({ createdAt: -1 });
    res.status(200).json(items);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// GET one item
const getItem = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "Item not found" });
  }
  const item = await Item.findById(id);

  if (!item) {
    return res.status(404).json({ message: "Item not found" });
  }

  res.status(200).json(item);
};

// POST one item
const createItem = async (req, res) => {
  const { title, description, phone, email } = req.body;

  try {
    const item = await Item.create(req.body);
    res.status(200).json(item);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE one item
const deleteItem = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "Item not found" });
  }
  const item = await Item.findOneAndDelete({ _id: id });

  if (!item) {
    return res.status(404).json({ message: "Item not found" });
  }
  res.status(200).json(item);
};

// UPDATE one item
const updateItem = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "Item not found" });
  }
  const item = await Item.findOneAndUpdate({ _id: id }, { ...req.body });

  if (!item) {
    return res.status(404).json({ message: "Item not found" });
  }
  res.status(200).json(item);
};

module.exports = {
  getItems,
  getItem,
  createItem,
  deleteItem,
  updateItem,
};
