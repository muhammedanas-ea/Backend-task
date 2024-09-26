import express from "express";
import {
  createUser,
  getUserDetails,
  updateUserData,
  userDelete
} from "../controller/userController.js";
const router = express();

router.post("/", createUser);
router.get("/", getUserDetails);
router.put("/:userId", updateUserData);
router.delete("/:userid",userDelete)

export default router;
