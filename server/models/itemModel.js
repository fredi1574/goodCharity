const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: false },
    phone: { type: String, required: false },
    email: { type: String, required: false },
    //   image: { type: String, required: false },
  },
  { timestamps: true } // When document created, add timestamps
);

module.exports = mongoose.model("Item", itemSchema);
