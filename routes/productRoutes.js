// routes/productRoutes.js
const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.route("/add/product").post(productController.addProduct)

// add order
router.route("/add/order").post(productController.addOrder)

router.post("/add", productController.addProduct);
router.get("/:id", productController.getProductById);
router.get("/", productController.getAllProducts);

module.exports = router;




