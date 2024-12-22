// src/utils/axios.ts
import axios from "axios";

const Axios = axios.create({
  baseURL: "https://reqres.in/api", // Replace with your API URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Example: Request Interceptor (Optional)
Axios.interceptors.request.use(
  (config) => {
    // You can modify headers before sending the request (e.g., add authorization token)
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

Axios.interceptors.response.use(
  (response) => response,
  (error) => {
    // Ensure errors conform to your TResponceGeneralType
    if (error.response) {
      const standardizedError = {
        ...error.response.data,
        status_code: error.response.status,
      };
      return Promise.reject(standardizedError);
    }
    return Promise.reject(error);
  }
);

export default Axios;
