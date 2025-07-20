import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import * as dotenv from "dotenv";
dotenv.config();

// https://vite.dev/config/
export default defineConfig({
    plugins: [tailwindcss()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    server: {
        port: parseInt(process.env.VITE_PORT || "5173", 10),
        strictPort: true,
    },
});
