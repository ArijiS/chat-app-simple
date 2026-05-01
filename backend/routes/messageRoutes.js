import express from "express";
import protectRoutes from "../middleware/protectRoutes.js";
import { sendMessage, getMessage } from "../controllers/messageController.js";

const router = express.Router();

router.post("/send/:id", protectRoutes, sendMessage);
router.get("/:id", protectRoutes, getMessage);

export default router;