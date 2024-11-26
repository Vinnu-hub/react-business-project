import axios from "axios";

const API_URL = "http://localhost:7079/auth";

// Axios instance
const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add token to the Authorization header
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// API Methods
export const signup = (data) => axiosInstance.post("/addUser", data);

export const login = (data) => axiosInstance.post("/login", data);

export const getAllUsers = () => axiosInstance.get("/getUsers");

export const logout = () => axiosInstance.post("/logout");
