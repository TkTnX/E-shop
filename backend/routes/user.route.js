import { Router } from "express";
import {
  createUser,
  loginUser,
  loginUserByToken,
} from "../controllers/user.controller.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const router = Router();

router.post("/sign-up", createUser);
router.post("/login", loginUser);
router.get("/me", verifyToken, loginUserByToken);

export default router;
