import express from "express";
import { ValidateMeasure } from "./modules/measure_controller";

const router = express.Router();

router.get("/upload", ValidateMeasure);
// router.patch("/confirm",);
// router.get()

export default router;