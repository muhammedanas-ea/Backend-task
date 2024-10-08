import mongoose from "mongoose";


export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Database connected successfully");
  } catch (err) {
    console.log("Database connection failed:", err.message);
  }
};
