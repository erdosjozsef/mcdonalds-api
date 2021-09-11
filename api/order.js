const express = require("express");
const router = express.Router();
const Order = require("../models/Order");
const OrderItem = require("../models/OrderItem");

router.post("/", async (req, res, next) => {
  const { totalPrice, products } = req.body;
  try {
    const order = await Order.create({ totalPrice: totalPrice });

    products.map(async (prod) => {
      return await OrderItem.create({
        quantity: prod.quantity,
        orderId: order.id,
        productId: prod.productId,
      });
    });

    return res.json({
      status: 201,
      msg: "Order success",
      result: [],
    });
  } catch (error) {
    console.log(error);
    return res.json({
      status: 500,
      msg: "Server error",
      result: [],
    });
  }
});

module.exports = router;
