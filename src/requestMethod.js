const axios = require("axios");

const BASE_URL = "http://localhost:5000/api";
const TOKEN = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjJkYzAyZDk3M2FiMzk5NmI1NTliNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MDkwNDcwOSwiZXhwIjoxNjUxNTA5NTA5fQ.Trcp3qO1flv9HGa9ZF2iU_3mbyuazHzIJjBu_HBUR4g`;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer${TOKEN}` },
});
