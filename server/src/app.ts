// Import core libraries
import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

// Import route modules
import recipeRoutes from "./routes/recipeRoutes";

// Load environment variables from .env file
dotenv.config();

const app = express();

// Enable CORS for all origins
app.use(
    cors({
        origin: "*",
    })
);

// Enable HTTP request logging in 'dev' format
app.use(morgan("dev"));

// Parse incoming JSON request bodies
app.use(express.json());

// Register recipe-related routes under /api path
app.use("/api", recipeRoutes);

// Log every incoming request method and path
app.use((req, res, next) => {
    console.log(`Request received: ${req.method} ${req.path}`);
    next();
});

export default app;
