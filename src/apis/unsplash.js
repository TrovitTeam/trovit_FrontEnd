import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com/",
    headers: {
        Authorization:
            "Client-ID 4bff28b38a5fb8092c6f3b53050c7c0ea657ec34c41662878959d45ea45c05a0"
    }
});