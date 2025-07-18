import { Request, Response } from "express";
import {
    recipes,
    favoriteRecipes,
    modernProperRecipes,
    selectedModernProperUser,
} from "../data/mockData";

// Get recipes and filter by query type
export const getRecipes = (req: Request, res: Response) => {
    // Define the allowed query parameters
    const allowedQueryKeys = ["type"];
    const queryKeys = Object.keys(req.query);

    // Check for any query parameters that are not allowed
    const invalidKeys = queryKeys.filter(
        (key) => !allowedQueryKeys.includes(key)
    );
    if (invalidKeys.length > 0) {
        // Respond with 400 if any invalid query parameters are present
        return res.status(400).json({
            error: `Invalid query parameter(s): ${invalidKeys.join(
                ", "
            )}. Allowed query parameter(s): ${allowedQueryKeys.join(", ")}.`,
        });
    }

    // Extract the 'type' query parameter
    const { type } = req.query;

    // Return the corresponding dataset based on the type
    if (type === "favorites") {
        return res.json(favoriteRecipes);
    } else if (type === "modern-proper") {
        return res.json({
            modernProperRecipes,
            selectedModernProperUser,
        });
    } else if (type) {
        // If 'type' is provided but not valid, return a 400 error
        return res.status(400).json({
            error: "Invalid type value. Allowed values are 'favorites' or 'modern-proper'.",
        });
    } else {
        // If no 'type' is provided, return all recipes
        return res.json(recipes);
    }
};
