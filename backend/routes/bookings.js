import express from "express";

import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";
import { createBooking, getAllBooking, getBooking } from "../controllers/bookingController.js";
import { createPaymentIntent } from "../controllers/paymentController.js";

const router = express.Router();

router.post("/", verifyUser, createBooking);
router.post("/create-payment-intent", createPaymentIntent);
router.get("/:id", verifyUser, getBooking);
router.get("/", verifyAdmin, getAllBooking);

export default router;
