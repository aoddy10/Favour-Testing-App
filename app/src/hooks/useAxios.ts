import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY || "";
const BASE_URL = import.meta.env.VITE_BASE_API_URL || "";

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: `API Key ${API_KEY}`,
        "Content-Type": "application/json",
    },
});

export default axiosInstance;
