import axios from "axios";

export const url = "https://demo1087320.mockable.io";

const api = axios.create({
    baseURL: url,
});

export default api;
