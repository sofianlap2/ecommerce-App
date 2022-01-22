import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTgzNzUyMjJlODE5MWFiYzUwYmRmNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0Mjg0NTg2NSwiZXhwIjoxNjQzMTA1MDY1fQ.wivncl4_ULeqdFExiSmRvUUDsRZMx9Pi8WEho13xdHE";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
});