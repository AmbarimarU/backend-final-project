// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const morgan = require("morgan");

// CONFIGURATION
const app = express();
const productController = require("./controllers/productController");

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// ROUTES
app.use("/products", productController);
app.get("/", (req, res) => {
  res.send("Welcome Final Project App");
});

// EXPORT
module.exports = app;
