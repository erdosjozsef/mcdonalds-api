const Category = require("../../models/Category");
const Product = require("../../models/Product");
const ProductItems = require("../../models/ProductItems");
const Order = require("../../models/Order");
const OrderItem = require("../../models/OrderItem");

const index = () => {
  OrderItem.belongsTo(Order, {
    constrains: true,
    onDelete: "CASCADE",
    foreignKey: "orderId",
  });

  Order.hasMany(OrderItem, { foreignKey: "orderId" });

  OrderItem.belongsTo(ProductItems, {
    constrains: true,
    onDelete: "CASCADE",
    foreignKey: "productId",
  });

  ProductItems.hasMany(OrderItem, { foreignKey: "productId" });

  Product.belongsTo(Category, {
    constrains: true,
    onDelete: "CASCADE",
    foreignKey: "categoryId",
  });

  Category.hasMany(Product, { foreignKey: "categoryId" });

  ProductItems.belongsTo(Product, {
    constrains: true,
    onDelete: "CASCADE",
    foreignKey: "productId",
  });
  Product.hasMany(ProductItems, { foreignKey: "productId" });
};

module.exports = { index };
