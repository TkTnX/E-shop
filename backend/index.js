import express from "express";
import cors from "cors";
import productRouter from "./routes/product.route.js";
import userRouter from "./routes/user.route.js";
import favoriteRouter from "./routes/favorites.route.js";
import cartRouter from "./routes/cart.route.js";
import cookieParser from "cookie-parser";
import { connectDB } from "./libs/connectDB.js";
const PORT = 3000;

const app = express();

app.use(express.json());
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(cookieParser());

app.use("/products", productRouter);
app.use("/users", userRouter);
app.use("/favorites", favoriteRouter);
app.use("/cart", cartRouter);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
