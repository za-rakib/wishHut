const axios = require("axios");

const BASE_URL = "http://localhost:5000/api";

// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
//   .currentUser?.accessToken;
const tokenId = JSON.parse(localStorage.getItem("persist:root"))?.user;

const TOKEN = tokenId && JSON.parse(tokenId).currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer${TOKEN}` },
});
