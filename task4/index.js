import express from "express";
import env from "dotenv";
import userRouter from "./routes/userRoutes.js";
import { connectDB } from "./config/dbConfig.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();
env.config();

app.use(express.json());
connectDB();

app.use("/",userRouter)

app.use(errorHandler)

app.listen(process.env.PORT, () => {
  console.log(`Server is running`);
});
