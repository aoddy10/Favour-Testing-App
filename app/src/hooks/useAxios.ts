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

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (!error.response) {
            // network error or connection lost
            const errorMessage = encodeURIComponent("Network connection lost");
            window.location.href = `/error?message=${errorMessage}`;
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
