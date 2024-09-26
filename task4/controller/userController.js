import { userSchema } from "../middleware/validate.js";
import userModel from "../model/userModel.js";

export const createUser = async (req, res, next) => {
  try {
    const { error } = userSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const { name, email } = req.body;

    const user = new userModel({
      name,
      email,
    });
    const userData = await user.save();

    return res
      .status(201)
      .json({ message: "User created successfully", user: userData });
  } catch (error) {
    next(error);
  }
};

export const getUserDetails = async (req, res, next) => {
  try {
    const userData = await userModel.find();
    return res.staus(200).json({ data: userData });
  } catch (error) {
    next(error);
  }
};

export const updateUserData = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { name, email } = req.body;

    const { error } = userSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    if (!userId) {
      return handleError(res, "User ID is required", 400);
    }

    const user = await userModel.findById({ _id: userId });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (name) user.name = name;
    if (email) user.email = email;

    const updatedUser = await user.save();
    return res
      .status(200)
      .json({ message: "User updated successfully", data: updatedUser });
  } catch (error) {
    next(error);
  }
};

export const userDelete = async (req, res, next) => {
  try {
    const { userId } = req.params;
    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }

    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await userModel.deleteOne({ _id: userId });
    return res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    next(error);
  }
};
