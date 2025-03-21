import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import Cart from "../models/cart.model.js";
import jwt from "jsonwebtoken";


export const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password)
      return res.status(400).json({ message: "All fields are required!" });

    const findUser = await User.findOne({ username });
    if (findUser)
      return res.status(500).json({ message: "User already exists!" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    if (!newUser) return res.status(500).json({ message: "User not created!" });

    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET);

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    const newCart = await Cart.create({ userId: newUser._id });

    if (!newCart) return res.status(500).json({ message: "Cart not created!" });

    await User.updateOne({ _id: newUser._id }, { cartId: newCart._id });

    const { password: _, ...others } = newUser._doc;

    return res.status(200).json(others);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ message: "All fields are required!" });

    const findUser = await User.findOne({ email });

    if (!findUser) return res.status(404).json({ message: "User not found!" });

    const comparePassword = await bcrypt.compare(password, findUser.password);
    if (!comparePassword)
      return res.status(400).json({ message: "Invalid credentials!" });

    const token = jwt.sign({ userId: findUser._id }, process.env.JWT_SECRET);

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    const { password: _, ...others } = findUser._doc;
    return res.status(200).json(others);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

export const loginUserByToken = async (req, res) => {
  try {
    const userId = req.userId;
    if (!userId) return res.status(401).json({ message: "User not found!" });

    const findUser = await User.findById(userId);
    if (!findUser) return res.status(404).json({ message: "User not found!" });
    const { password: _, ...others } = findUser._doc;
    return res.status(200).json(others);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

export const logoutUser = async (req, res) => {
  try {
    res.clearCookie("token");

    return res.status(200).json({ message: "Logout successful!" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};
