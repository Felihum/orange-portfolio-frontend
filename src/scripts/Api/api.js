import axios from "axios";

const URL = "https://cc90-2804-868-d057-760b-2ded-1f6c-5efe-73c0.ngrok-free.app"

const api = axios.create({
    baseURL: URL,
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default api;