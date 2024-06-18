// controllers/orderController.js
const Order = require("../models/Order");

const getOrders = async (req, res) => {
  console.log("req.body", req.user);
  const orders = await Order.find({ user: req.user._id }).populate(
    "products.product"
  );
  console.log("orders----------->", orders);
  res.json(orders);
};

const createOrder = async (req, res) => {
  const { products, totalAmount } = req.body;

  const order = new Order({ user: req.user._id, products, totalAmount });

  const createdOrder = await order.save();
  res.status(201).json(createdOrder);
};

module.exports = { getOrders, createOrder };
