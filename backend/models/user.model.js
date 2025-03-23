import mongoose from "mongoose";
const UserModel = new mongoose.Schema(
  {
    img: String,
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstName: String,
    lastName: String,
    address: String,
    phoneNumber: String,
    cartId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cart",
      default: null,
    },

  },
  { timestamps: true }
);

export default mongoose.model("User", UserModel);
