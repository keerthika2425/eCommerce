// services/productService.js
const Product = require("../models/Product");

const addProduct = async (productData) => {
  const product = new Product(productData);
  return await product.save();
};

const getProductById = async (id) => {
  return await Product.findById(id);
};

const getAllProducts = async () => {
  return await Product.find();
};

module.exports = { addProduct, getProductById, getAllProducts };
