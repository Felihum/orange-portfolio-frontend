import axios from "axios";

const URL = "http://localhost:8080"

const api = axios.create({
    baseURL: URL,
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default api;