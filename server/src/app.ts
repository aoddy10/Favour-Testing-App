// Import core libraries
import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

import { verifyApiToken } from "./middlewares/verifyApiToken";

// Import route modules
import recipeRoutes from "./routes/recipeRoutes";

// Load environment variables from .env file
dotenv.config();

const app = express();
app.set("etag", false);

// Enable CORS for localhost:5173 and any origin
app.use(
    cors({
        origin: [
            "http://localhost:5173",
            "http://localhost:3000",
            // "*", // user only when need to test from all address
        ],
    })
);

// Enable HTTP request logging in 'dev' format
app.use(morgan("dev"));

// Parse incoming JSON request bodies
app.use(express.json());

// verify api key
app.use(verifyApiToken);

// Register recipe-related routes under /api path
app.use("/api", recipeRoutes);

// Log every incoming request method and path
app.use((req, res, next) => {
    res.setHeader(
        "Cache-Control",
        "no-store, no-cache, must-revalidate, private"
    ); // Use this for API that data will change often.
    console.log(`Request received: ${req.method} ${req.path}`);
    next();
});

export default app;
