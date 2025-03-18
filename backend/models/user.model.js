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
  },
  { timestamps: true }
);

export default mongoose.model("User", UserModel);
