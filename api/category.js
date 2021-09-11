const express = require("express");
const router = express.Router();
const Categories = require("../models/Category");
const Product = require("../models/Product");
const ProductItems = require("../models/ProductItems");

router.get("/", async (req, res) => {
  try {
    const result = await Categories.findAll();
    return res.json({
      status: 200,
      msg: "Category list successfully listed",
      result: result,
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

router.get("/:categoryName", async (req, res) => {
  const categoryName = req.params.categoryName;
  try {
    const category = await Categories.findOne({
      where: { seoUrl: categoryName },
    });

    const products = await Product.findAll({
      where: { categoryId: category.id },
      include: [{ model: ProductItems }],
    });
    var result = products.map((product) => ({
      id: product.id,
      name: product.name,
      price: product.price,
      imageUrl: product.imageUrl,
      extras: product.ProductItems,
    }));

    return res.json({
      status: 200,
      msg: "Product list successfully listed",
      result: result,
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
