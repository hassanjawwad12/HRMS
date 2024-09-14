const Backend = import.meta.env.VITE_BACKEND;
import { getAccessToken } from "./Function"
import axios from "axios";

const AXIOS_API = axios.create({
    baseURL: Backend,
    headers: {
        "Content-Type": "application/json",
        authorization: `${await getAccessToken()}`
    }
});

console.log("AXIOS API HEADER : ", AXIOS_API)

export default AXIOS_API;