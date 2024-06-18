// controllers/productController.js
const Product = require("../models/Product");

const getProducts = async (req, res) => {
  const products = await Product.find({});
  res.json(products);
};

const createProduct = async (req, res) => {
  const { name, price, description, category, stock } = req.body;
  const product = new Product({ name, price, description, category, stock });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
};

module.exports = { getProducts, createProduct };
