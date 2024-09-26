import express from "express";
import env from "dotenv";
import axios from "axios";
import redisClient from "./config/redisConfig.js";
import { errorHandler } from "./middleware/errorHandler.js";

env.config();
const app = express();

app.use(express.json());

app.get("/weather", async (req, res, next) => {
  try {
    const city = req.query.city;

    if (!city) {
      return res.status(400).json("City name is required");
    }

    const cachedData = await redisClient.get(city);
    if (cachedData) {
      return res.json(JSON.parse(cachedData));
    }

    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`
    );

    if (!response.data) {
      return res
        .status(404)
        .json({ message: `Weather data for ${city} not found` });
    }
    
    await redisClient.set(city, JSON.stringify(response.data), { EX: 600 });

    return res.status(200).json(response.data);
  } catch (error) {
    next(error);
  }
});

app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Server is running`);
});
