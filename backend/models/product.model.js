import mongoose from "mongoose";

const ProductModel = new mongoose.Schema({
  img: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: true,
  },
  description: String,
  discount: Number,
  category: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Product", ProductModel);
