// routes/orderRoutes.js
const express = require("express");
const { protect } = require("../middleware/auth");

const  { getOrders , createOrder} = require("../controllers/orderController")

const router = express.Router();

router.get("/", protect, getOrders);
router.post("/", protect, createOrder);

module.exports = router;
