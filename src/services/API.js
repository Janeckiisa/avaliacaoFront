import axios from "axios";

const API = axios.create({
    baseURL: "https://avaliacaoback.onrender.com/api", //https://kanbom.onrender.com/api
    timeout: 10000
});

export default API;