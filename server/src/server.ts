// Import the configured Express application
import app from "./app";

// Define the server port from environment variable or fallback to 5001
const PORT = process.env.PORT || 5001;

// Start the Express server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
