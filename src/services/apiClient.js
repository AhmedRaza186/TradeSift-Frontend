import axios from "axios";
import API_BASE_URL from "./apiConfig.js";

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning":"true"
    },
    timeout: 10000,
    withCredentials: true,
});

apiClient.interceptors.response.use(
    (response) => response,

    (error) => {
        if (error.response) {
            console.error(
                "API Error:",
                error.response.status,
                error.response.data
            );
        } else if (error.request) {
            console.error(
                "Network Error:",
                error.message
            );
        } else {
            console.error(
                "Request Error:",
                error.message
            );
        }

        return Promise.reject(error);
    }
);

export default apiClient; 