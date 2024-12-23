
// models/Product.js
const mongoose = require("mongoose");
const { v4: uuidv4 } = require('uuid');


const productSchema = new mongoose.Schema({
    _id:{
        type: String,
        default:uuidv4
    },
    productName:{
        type: String,
    },
    price: {
        type:Number
    },
    stock:{
        type: Number,
        default: 0
    },
    active:{
        type: Boolean,
        default: true
    }

})

const productModal = mongoose.model("product",productSchema);
module.exports = productModal



const ProductSchema = new mongoose.Schema({
  product_name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
});
const orderSchema = new mongoose.Schema({
  _id:{
      type: String,
      default:uuidv4
  },
  userId:{
      type: String
  },
  productId:{
      type: String
  },
  status:{
      type: String,
      default:" ordered"
  }
 
})

const orderModal = mongoose.model("order",orderSchema);
module.exports = orderModal



module.exports = mongoose.model("Product", ProductSchema);
