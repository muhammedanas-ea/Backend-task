import express from "express";
import env from "dotenv";
import { Server } from "socket.io";
import { configSocket } from "./config/socketConfig.js";

const app = express();
env.config();

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running`);
});

const io = new Server(server);
configSocket(io);
