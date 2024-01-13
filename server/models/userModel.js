const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: false },
  // userName: { type: String },
});

// Static signup method
userSchema.statics.signup = async function (email, password) {
  // Validate the given email and password using the validate function
  validate(email, password);

  // Check if email already exists
  const existingUser = await this.findOne({ email });
  if (existingUser) {
    throw Error("Email already exists");
  }

  // Hash password before saving it to the database by using bcrypt
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  // Create a new user document with the hashed password and save it to the database
  const newUser = {
    email,
    password: hash,
  };
  return await this.create(newUser);
};

// Validate the given email and password using the validator package
const validate = (email, password) => {
  if (!email || !password) {
    throw Error("All fields must be filled");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email not valid");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Password not strong enough");
  }
};

module.exports = mongoose.model("User", userSchema);
