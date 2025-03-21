import { Router } from "express";
import {
  getFavorites,
  switchFavorites,
} from "../controllers/favorite.controller.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const router = Router();

router.get("/", verifyToken, getFavorites);
router.post("/:productId", verifyToken, switchFavorites);

export default router;
