import express from "express";
import { getRecipes } from "../controllers/recipeController";

const router = express.Router();

// Unified Recipe Endpoint with type filter via query
router.get("/recipes", getRecipes);

export default router;
