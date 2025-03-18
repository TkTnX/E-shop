import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
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
    // TODO: Фикс адаптива на главной
    // TODO: Доделать регистрацию пользователя
    // (при входе в аккаунт сразу отображать данные 'сейчас они не обновляются')
    // (при заходе на сайт по токену входить в аккаун)
    // (функция logout удалять токен)
    //   TODO: При регистрации создавать корзину

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
