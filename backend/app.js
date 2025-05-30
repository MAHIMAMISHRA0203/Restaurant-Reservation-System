import express from "express";
import cors from "cors";
import { errorMiddleware } from "./error/error.js";
import router from "./routes/reservationRoutes.js";
import { dbConnection } from "./database/dbConnection.js";
import dotenv from 'dotenv';

const app = express();
dotenv.config({ path: "./config/config.env" });
console.log(process.env.MONGO_URI); 
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/reservation", router);

app.get("/", (req, res, next)=>{return res.status(200).json({
  success: true,
  message: "HELLO WORLD AGAIN"
})})

dbConnection();

app.use(errorMiddleware);

export default app;