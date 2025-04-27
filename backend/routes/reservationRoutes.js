import express from "express";
import send_reservation from "../controller/reservation.js";

const router = express.Router();

router.post("/send", send_reservation);
// axios.post("http://localhost:4000/api/v1/reservation/send", data);

export default router;