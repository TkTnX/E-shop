import express from "express";
import cors from "cors";
import productRouter from "./routes/product.route.js";
import { connectDB } from "./libs/connectDB.js";
const PORT = 3000;

const app = express();

app.use(express.json());
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));

app.use("/products", productRouter);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
