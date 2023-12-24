const express = require("express");
const { connectToDB, getDB } = require("./db");

// Initialize the app
const app = express();

// Connect to Database
let db;

connectToDB((error) => {
  if (!error) {
    const port = process.env.PORT || 5000;
    app.listen(port, () => console.log(`Server listening on port ${port}`));
    db = getDB();
  }
});
