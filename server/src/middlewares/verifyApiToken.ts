import { Request, Response, NextFunction } from "express";
import crypto from "crypto";

export const verifyApiToken = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    let apiToken: string | null = null;

    // Check Authorization header with 'API Key'
    const authHeader = req.headers["authorization"];
    if (typeof authHeader === "string" && authHeader.startsWith("API Key ")) {
        apiToken = authHeader.substring(8);
    }

    const hashedApiKey = process.env.HASHED_API_KEY;

    if (!apiToken || typeof apiToken !== "string") {
        return res
            .status(401)
            .json({ error: "API token is missing or invalid." });
    }

    // Hash token from request
    const tokenHash = crypto
        .createHash("sha256")
        .update(apiToken)
        .digest("hex");

    // Compare hashed token with stored hashed key
    if (tokenHash === hashedApiKey) {
        next();
    } else {
        return res.status(401).json({ error: "Invalid API token." });
    }
};
