import axios from "axios";

export default axios.create({
    baseURL: "https://api.thedogapi.com/v1",
    headers: {
        api_key: import.meta.env.VITE_API_KEY,
    }
});
