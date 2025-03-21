import Router from "express";
import { changeItemQuantity, getCart } from "../controllers/cart.controller.js";
import { verifyToken } from "../middlewares/verifyToken.js";
const router = Router();

router.get("/", verifyToken, getCart);
router.post("/quantity", changeItemQuantity)

export default router;
