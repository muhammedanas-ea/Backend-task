import express from "express";
import env from "dotenv"
import { connectDB } from "./config/dbConfig.js";
import authRoutes from "./routes/authRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();
env.config();

app.use(express.json());
connectDB();

app.use("/auth",authRoutes)

app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log("server is running");
});
