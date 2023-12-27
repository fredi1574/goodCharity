import { Schema, model } from "mongoose";
import { hash } from "bcrypt";

// Create user schema
const userSchema = new Schema({
  userName: { type: String, required: true, unique: false },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: false },
  phone: { type: String, required: false, unique: true },
  address: { type: String, required: false, unique: false },
});

// Function to hash the password before saving it to the database
userSchema.pre("save", async function (next) {
  if (user.isModified("password")) {
    user.password = await hash(user.password, 8);
  }
  next();
});

// Export the model
export default model("User", userSchema);
