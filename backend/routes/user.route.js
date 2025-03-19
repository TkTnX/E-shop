import { Router } from "express";
import {
  createUser,
  loginUser,
  loginUserByToken,
  logoutUser,
} from "../controllers/user.controller.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const router = Router();

router.post("/auth/sign-up", createUser);
router.post("/auth/login", loginUser);
router.get("/auth/me", verifyToken, loginUserByToken);
router.post("/auth/logout", logoutUser);

export default router;
