// controllers/productController.js
const express = require("express");
const Product = require("../models/Product");
const {
  getProducts,
  createProduct,
} = require("../controllers/productController");

const router = express.Router();

router.get("/", getProducts);
router.post("/", createProduct);

module.exports = router;
