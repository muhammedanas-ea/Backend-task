import express from "express";
import env from "dotenv";
import productRoutes from "./routes/productRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";
const app = express();
env.config();

app.use(express.json());

app.use("/", productRoutes);

app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log("server is running");
});
