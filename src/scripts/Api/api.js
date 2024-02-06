import axios from "axios";

const URL = "https://43ee-2804-868-d057-760b-9849-1d27-d01b-692c.ngrok-free.app"

const api = axios.create({
    baseURL: URL,
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default api;