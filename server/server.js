require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const userRoutes = require("./routes/user");
const itemsRoutes = require("./routes/items");

// Initialize an express app
const app = express();

// middleware to enable JSON parsing
app.use(express.json());

app.use("/api/user", userRoutes);
app.use("/api/items", itemsRoutes);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log(
        `connected to database and listening on port ${process.env.PORT}`
      )
    );
  })
  .catch((error) => {
    console.error(error);
  });
