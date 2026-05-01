import express from "express";
import protectRoutes from "../middleware/protectRoutes.js";
import { getUsersFromSidebar } from "../controllers/userController.js"

const router = express.Router();
router.get("/", protectRoutes, getUsersFromSidebar);

export default router;