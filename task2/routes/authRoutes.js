import express from "express";
import { userRegistration, userLogin } from "../controller/authController.js";
import { auth } from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/register", userRegistration);
router.post("/login", userLogin);
router.get("/profile", auth, (req, res) => {
  return res.status(200).json({ message: "user is Authenticated" });
});
router.get("/settings", auth, (req, res) => {
  return res.status(200).json({ message: "user is Authenticated" });
});

export default router;
