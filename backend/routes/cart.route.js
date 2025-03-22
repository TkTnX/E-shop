import Router from "express";
import {
  changeItemQuantity,
  getCart,
  removeItemFromCart,
  addToCart,
} from "../controllers/cart.controller.js";
import { verifyToken } from "../middlewares/verifyToken.js";
const router = Router();

router.get("/", verifyToken, getCart);
router.post("/quantity", changeItemQuantity);
router.delete("/:id", verifyToken, removeItemFromCart);
router.post("/add", verifyToken, addToCart);

export default router;
